import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LabConfiguration = () => (
  <Container className="py-3">
    <h2>Lab Configuration</h2>
    <h3>Step By Step Decision Making Inside the Switch</h3>
    <p>TODO: Should go into the steps our switch does more in depth than the steps in SDN Overview</p>
    <p>Want to use specific event names from within the OS-Ken source code.</p>
    <h3>Configuration Relating to the HP 2920-24G network switch</h3>
    <p>TODO: this should be updated after explaining what Openflow/SDN does.</p>
    <h4>Concise Changes</h4>
    <ul>
      <li>The SDN controller needs to push flows to the hardware flow table, Table 100.</li>
      <li>The SDN controller shouldn&apos;t tell the switch where to forward packets, instead packets should just be forwarded to the switch&apos;s normal forwarding method.</li>
    </ul>
    <h4>Flow Tables</h4>
    <p>By default (our current configuration), there are three flow tables within each HP 2920-24G network switch.</p>
    <p>The three tables are as follows:</p>
    <h5>Table 0</h5>
    <ul>
      <li>Contains a single, match-all flow that forwards packets to &quot;Table 100&quot;.</li>
      <li>The table that Table 0 forwards to is configurable within the switch&apos;s configuration.</li>
      <li>The HP 2920-24G network switch does not allow other flows to be added to Table 0. (It took me a literal month to figure this one out...)</li>
    </ul>
    <h5>Table 100</h5>
    <ul>
      <li>This is known as the &quot;hardware table&quot; as the switching within the table is handled in hardware.</li>
      <li>As such, network traffic is able to be switched at ping latency of less than 1 ms.</li>
      <li>However, the downside of using this flow table is that not all possible match criteria is able to be used in hardware. See the &quot;Supported Matching Criteria&quot; section below.</li>
      <li>By default, contains no flows, as such, if any packet is forwarded to a table without any flows, the packet will be dropped</li>
      <li>This will be the flow table that our controller will add flows to.</li>
    </ul>
    <h5>Table 200</h5>
    <ul>
      <li>This is known as the &quot;software table&quot; as the switching within the table is handled in software inside the switch.</li>
      <li>As such, network traffic is switched slower than the hardware table, at ping latency of around 125 ms.</li>
      <li>Although this speed is extremely slow, the upside of using the software table as there are more possible match criteria than in the hardware table. However, the vastly decreased speeds negate this benefit.</li>
      <li>By default, contains no flows, as such, if any packet is forwarded to a table without any flows, the packet will be dropped.</li>
    </ul>
    <h4>Supported Matching Criteria</h4>
    <Table striped bordered responsive="xl">
      <thead>
        <tr><th>Argument</th><th>Value</th><th>Description</th><th>Allowed in Hardware</th><th>Allowed in Software</th></tr>
      </thead>
      <tbody>
        <tr> <td>in_port       </td> <td>Integer 32bit</td> <td>Switch input port                   </td> <td>Yes                 </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>in_phy_port   </td> <td>Integer 32bit</td> <td>Switch physical input port          </td> <td>No                  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>metadata      </td> <td>Integer 64bit</td> <td>Metadata passed between tables      </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>eth_dst       </td> <td>MAC address  </td> <td>Ethernet destination address        </td> <td>No                  </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>eth_src       </td> <td>MAC address  </td> <td>Ethernet source address             </td> <td>Yes                 </td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>eth_type      </td> <td>Integer 16bit</td> <td>Ethernet frame type                 </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>vlan_vid      </td> <td>Integer 16bit</td> <td>VLAN id                             </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>vlan_pcp      </td> <td>Integer 8bit </td> <td>VLAN priority                       </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ip_dscp       </td> <td>Integer 8bit </td> <td>IP DSCP (6 bits in ToS field)       </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ip_ecn        </td> <td>Integer 8bit </td> <td>IP ECN (2 bits in ToS field)        </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ip_proto      </td> <td>Integer 8bit </td> <td>IP protocol                         </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv4_src      </td> <td>IPv4 address </td> <td>IPv4 source address                 </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv4_dst      </td> <td>IPv4 address </td> <td>IPv4 destination address            </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>tcp_src       </td> <td>Integer 16bit</td> <td>TCP source port                     </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>tcp_dst       </td> <td>Integer 16bit</td> <td>TCP destination port                </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>udp_src       </td> <td>Integer 16bit</td> <td>UDP source port                     </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>udp_dst       </td> <td>Integer 16bit</td> <td>UDP destination port                </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>sctp_sr       </td> <td>Integer 16bit</td> <td>SCTP source port                    </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>sctp_dst      </td> <td>Integer 16bit</td> <td>SCTP destination port               </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>icmpv4_type   </td> <td>Integer 8bit </td> <td>ICMP type                           </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>icmpv4_code   </td> <td>Integer 8bit </td> <td>ICMP code                           </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>arp_op        </td> <td>Integer 16bit</td> <td>ARP opcode                          </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>arp_spa       </td> <td>IPv4 address </td> <td>ARP source IPv4 address             </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>arp_tpa       </td> <td>IPv4 address </td> <td>ARP target IPv4 address             </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>arp_sha       </td> <td>MAC address  </td> <td>ARP source hardware address         </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>arp_tha       </td> <td>MAC address  </td> <td>ARP target hardware address         </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_src      </td> <td>IPv6 address </td> <td>IPv6 source address                 </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_dst      </td> <td>IPv6 address </td> <td>IPv6 destination address            </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_flabel   </td> <td>Integer 32bit</td> <td>IPv6 Flow Label                     </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>icmpv6_type   </td> <td>Integer 8bit </td> <td>ICMPv6 type                         </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>icmpv6_code   </td> <td>Integer 8bit </td> <td>ICMPv6 code                         </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_nd_target</td> <td>IPv6 address </td> <td>Target address for ND               </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_nd_sll   </td> <td>MAC address  </td> <td>Source link-layer for ND            </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_nd_tll   </td> <td>MAC address  </td> <td>Target link-layer for ND            </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>mpls_label    </td> <td>Integer 32bit</td> <td>MPLS label                          </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>mpls_tc       </td> <td>Integer 8bit </td> <td>MPLS TC                             </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>mpls_bos      </td> <td>Integer 8bit </td> <td>MPLS BoS bit                        </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>pbb_isid      </td> <td>Integer 24bit</td> <td>PBB I-SID                           </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>tunnel_id     </td> <td>Integer 64bit</td> <td>Logical Port Metadata               </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>ipv6_exthdr   </td> <td>Integer 16bit</td> <td>IPv6 Extension Header pseudo-field  </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>pbb_uca       </td> <td>Integer 8bit </td> <td>PBB UCA header field                </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>tcp_flags     </td> <td>Integer 16bit</td> <td>TCP flags                           </td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
        <tr> <td>actset_output </td> <td>Integer 32bit</td> <td>Output port from action set metadata</td> <td>Unknown (Assumed No)</td> <td>Unknown (Assumed Yes)</td> </tr>
      </tbody>
    </Table>
    <p>Table adapted from <Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html#flow-match-structure">https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html#flow-match-structure</Link>.</p>
    <h4>TODO: add a table for actions we have tested that our switches don&apos;t support.</h4>
  </Container>
);

export default LabConfiguration;
