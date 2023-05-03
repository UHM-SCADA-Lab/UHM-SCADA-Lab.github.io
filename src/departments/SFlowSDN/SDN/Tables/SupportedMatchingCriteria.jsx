import React from 'react';
import { Table } from 'react-bootstrap';

const SupportedMatchingCriteria = () => (
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
);

export default SupportedMatchingCriteria;
