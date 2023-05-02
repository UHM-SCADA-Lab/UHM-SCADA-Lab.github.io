import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LabConfiguration = () => (
  <Container className="py-3">
    <h2>Lab Configuration</h2>
    <h3>Concise Changes</h3>
    <ul>
      <li>The SDN controller needs to push flows to the hardware flow table, Table 100.</li>
      <li>The SDN controller will create flows that forward packets to the network switch&apos;s normal forwarding plane. This avoids the need of the SDN controller to create a MAC address table.</li>
    </ul>
    <h3>Flow Tables</h3>
    <p>By default (our current configuration), there are three flow tables within each HP 2920-24G network switch.</p>
    <p>The three tables are as follows:</p>
    <h5>Table 0</h5>
    <ul>
      <li>Contains a single, match-all flow that forwards packets to &quot;Table 100&quot;.</li>
      <li>The table that Table 0 forwards to is configurable within the switch&apos;s configuration.</li>
      <li>The HP 2920-24G network switch does not allow other flows to be added to Table 0, as such flows will be added to either Table 100 or Table 200. (It took me a literal month to figure this one out...)</li>
    </ul>
    <h5>Table 100</h5>
    <ul>
      <li>This is known as the &quot;hardware table&quot; as the switching within the table is handled in hardware.</li>
      <li>As such, network traffic is able to be switched at ping latency of less than 1 ms.</li>
      <li>However, the downside of using this flow table is that not all possible match criteria is able to be used in hardware. See the &quot;Supported Matching Criteria&quot; section below.</li>
      <li>Contains no flows by default.</li>
      <li>This will be the flow table that our controller will add flows to.</li>
    </ul>
    <h5>Table 200</h5>
    <ul>
      <li>This is known as the &quot;software table&quot; as the switching within the table is handled in software inside the switch.</li>
      <li>As such, network traffic is switched slower than the hardware table, at ping latency of around 125 ms.</li>
      <li>Although this speed is extremely slow, the upside of using the software table as there are more possible match criteria than in the hardware table. However, the vastly decreased speeds negate this benefit.</li>
      <li>Contains no flows by default.</li>
    </ul>
    <h5>Supported Matching Criteria<sup>1</sup></h5>
    <Table striped bordered responsive="xl">
      <thead>
        <tr> <th>Argument      </th> <th>Value        </th> <th>Description                         </th> <th>Allowed in Hardware     </th> <th>Allowed in Software  </th> </tr>
      </thead>
      <tbody>
        <tr> <td>in_port       </td> <td>Integer 32bit</td> <td>Switch input port                   </td> <td>Yes<sup>2</sup>         </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>in_phy_port   </td> <td>Integer 32bit</td> <td>Switch physical input port          </td> <td>No<sup>2</sup>          </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>metadata      </td> <td>Integer 64bit</td> <td>Metadata passed between tables      </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>eth_dst       </td> <td>MAC address  </td> <td>Ethernet destination address        </td> <td>No<sup>2</sup>          </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>eth_src       </td> <td>MAC address  </td> <td>Ethernet source address             </td> <td>Yes<sup>2</sup>         </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>eth_type      </td> <td>Integer 16bit</td> <td>Ethernet frame type                 </td> <td>Assumed Yes<sup>3</sup> </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>vlan_vid      </td> <td>Integer 16bit</td> <td>VLAN id                             </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>vlan_pcp      </td> <td>Integer 8bit </td> <td>VLAN priority                       </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ip_dscp       </td> <td>Integer 8bit </td> <td>IP DSCP (6 bits in ToS field)       </td> <td>Assumed Yes<sup>3</sup> </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ip_ecn        </td> <td>Integer 8bit </td> <td>IP ECN (2 bits in ToS field)        </td> <td>Assumed Yes<sup>3</sup> </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ip_proto      </td> <td>Integer 8bit </td> <td>IP protocol                         </td> <td>Assumed Yes<sup>3</sup> </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv4_src      </td> <td>IPv4 address </td> <td>IPv4 source address                 </td> <td>Assumed Yes<sup>3</sup> </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv4_dst      </td> <td>IPv4 address </td> <td>IPv4 destination address            </td> <td>Assumed Yes<sup>3</sup> </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>tcp_src       </td> <td>Integer 16bit</td> <td>TCP source port                     </td> <td>Assumed Yes<sup>3</sup> </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>tcp_dst       </td> <td>Integer 16bit</td> <td>TCP destination port                </td> <td>Assumed Yes<sup>3</sup> </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>udp_src       </td> <td>Integer 16bit</td> <td>UDP source port                     </td> <td>Assumed Yes<sup>3</sup> </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>udp_dst       </td> <td>Integer 16bit</td> <td>UDP destination port                </td> <td>Assumed Yes<sup>3</sup> </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>sctp_sr       </td> <td>Integer 16bit</td> <td>SCTP source port                    </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>sctp_dst      </td> <td>Integer 16bit</td> <td>SCTP destination port               </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>icmpv4_type   </td> <td>Integer 8bit </td> <td>ICMP type                           </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>icmpv4_code   </td> <td>Integer 8bit </td> <td>ICMP code                           </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>arp_op        </td> <td>Integer 16bit</td> <td>ARP opcode                          </td> <td>No<sup>2</sup>          </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>arp_spa       </td> <td>IPv4 address </td> <td>ARP source IPv4 address             </td> <td>No<sup>2</sup>          </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>arp_tpa       </td> <td>IPv4 address </td> <td>ARP target IPv4 address             </td> <td>No<sup>2</sup>          </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>arp_sha       </td> <td>MAC address  </td> <td>ARP source hardware address         </td> <td>No<sup>2</sup>          </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>arp_tha       </td> <td>MAC address  </td> <td>ARP target hardware address         </td> <td>No<sup>2</sup>          </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_src      </td> <td>IPv6 address </td> <td>IPv6 source address                 </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_dst      </td> <td>IPv6 address </td> <td>IPv6 destination address            </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_flabel   </td> <td>Integer 32bit</td> <td>IPv6 Flow Label                     </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>icmpv6_type   </td> <td>Integer 8bit </td> <td>ICMPv6 type                         </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>icmpv6_code   </td> <td>Integer 8bit </td> <td>ICMPv6 code                         </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_nd_target</td> <td>IPv6 address </td> <td>Target address for ND               </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_nd_sll   </td> <td>MAC address  </td> <td>Source link-layer for ND            </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_nd_tll   </td> <td>MAC address  </td> <td>Target link-layer for ND            </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>mpls_label    </td> <td>Integer 32bit</td> <td>MPLS label                          </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>mpls_tc       </td> <td>Integer 8bit </td> <td>MPLS TC                             </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>mpls_bos      </td> <td>Integer 8bit </td> <td>MPLS BoS bit                        </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>pbb_isid      </td> <td>Integer 24bit</td> <td>PBB I-SID                           </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>tunnel_id     </td> <td>Integer 64bit</td> <td>Logical Port Metadata               </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_exthdr   </td> <td>Integer 16bit</td> <td>IPv6 Extension Header pseudo-field  </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>pbb_uca       </td> <td>Integer 8bit </td> <td>PBB UCA header field                </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>tcp_flags     </td> <td>Integer 16bit</td> <td>TCP flags                           </td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>actset_output </td> <td>Integer 32bit</td> <td>Output port from action set metadata</td> <td>Assumed No<sup>3</sup>  </td> <td>Unknown (Assumed Yes)</td> </tr>
      </tbody>
    </Table>
    <sup>1</sup> Table adapted from <Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html#flow-match-structure">OS-Ken&apos;s documentation</Link>.<br />
    <sup>2</sup> Confirmed through experimentation. <br />
    <sup>3</sup> Found from <Link to="https://community.hpe.com/t5/software-defined-networking/using-hardware-flows-table-with-hp-2920-24g/td-p/6931454#.ZExGNi-B3BU">HP community post detailing acceptable match criteria in hardware</Link>. <br />
    <br />
    <h3>Forwarding Actions</h3>
    <p>Our initial implementation of SDN was based off an example program, <Link to="https://github.com/faucetsdn/ryu/blob/master/ryu/app/simple_switch_13.py">simple_switch_13.py</Link>, provided by the RYU SDN framework. This program creates flows that forward packets straight to their physical destination port on the network switch. However, this requires the controller to build a MAC address table of where every device on the network. That is, the controller needs to know which port each device is connected to. Luckily, the HP 2920-24G network switch happens to build it&apos;s MAC address table regardless if OpenFlow is enabled or disabled. As such, we can use the OpenFlow port &quot;OFPP_NORMAL&quot; to forward packets to be processed by the switch&apos;s normal switching. </p>
    <p>See the following &quot;Possible OpenFlow Ports&quot; table for explanations of OpenFlow ports, whether or not the port is a valid destination to forward packets to, and whether or not the port is supported by the HP 2920-24G switch.</p>
    <h5>Possible OpenFlow Ports<sup>4</sup></h5>
    <Table striped bordered responsive="xl">
      <thead>
        <tr> <th>OpenFlow Port Name </th> <th>Description                                               </th> <th>Used in Packet Forwarding?</th> <th>Supported by the Switch </th> </tr>
      </thead>
      <tbody>
        <tr> <td>OFPP_IN_PORT       </td> <td>Forwards the packet out the input port.                                         </td> <td>Yes </td> <td>Unknown </td> </tr>
        <tr> <td>OFPP_TABLE         </td> <td>Performs actions in the flow table.                                             </td> <td>No  </td> <td>Unknown </td> </tr>
        <tr> <td>OFPP_NORMAL        </td> <td>Forwards the packet to be processed by the switch&apos;s normal switching.      </td> <td>Yes </td> <td>Yes     </td> </tr>
        <tr> <td>OFPP_FLOOD         </td> <td>Forwards the packet to all physical ports except input ports and blocked ports. </td> <td>Yes </td> <td>Yes     </td> </tr>
        <tr> <td>OFPP_ALL           </td> <td>Forwards the packet to all physical ports except input ports.                   </td> <td>Yes </td> <td>Unknown </td> </tr>
        <tr> <td>OFPP_CONTROLLER    </td> <td>Forwards the packet to the controller as a flow request.                        </td> <td>Yes </td> <td>Yes     </td> </tr>
        <tr> <td>OFPP_LOCAL         </td> <td>Local OpenFlow &quot;port&quot;. Indicates a local port of the switch.          </td> <td>Yes </td> <td>No      </td> </tr>
        <tr> <td>OFPP_ANY           </td> <td>Used as a wildcard in certain messages to the switch.                           </td> <td>No  </td> <td>Yes     </td> </tr>
      </tbody>
    </Table>
    <sup>4</sup> Table adapted from <Link to="https://github.com/openstack/os-ken/blob/dcd0d1a1eeb12fe7de64b3c3a7e1f8f64d86e37e/os_ken/ofproto/ofproto_v1_3.py">OS-Ken&apos;s source code</Link> and <Link to="https://osrg.github.io/ryu-book/en/html/openflow_protocol.html">RYU&apos;s documentation</Link>. The &quot;Supported by the Switch&quot; column was determined experimentally.<br />
  </Container>
);

export default LabConfiguration;
