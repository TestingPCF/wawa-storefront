import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';



const tokensData = {
    "access_token": "fad9b8ee-c76b-44be-b781-a0c7bf32c81b",
    "token_type": "bearer",
    "expires_in": 604799,
    "scope": "wawastore",
    "role": "PUBLIC",
    "roles": [
        "PUBLIC"
    ]
}

const itemData = { 
        "self":{  
           "type":"items.item",
           "uri":"/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=?zoom=definition:components:element,definition:components:element:components:element,recommendations:accessory:element:code",
           "href":"http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=?zoom=definition:components:element,definition:components:element:components:element,recommendations:accessory:element:code"
        },
        "messages":[  
     
        ],
        "links":[  
           {  
              "rel":"availability",
              "rev":"item",
              "type":"availabilities.availability-for-item",
              "uri":"/availabilities/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=",
              "href":"http://ffz-sandbox-2.epdemos.com/cortex/availabilities/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk="
           },
           {  
              "rel":"addtocartform",
              "type":"carts.add-to-default-cart-form",
              "uri":"/carts/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/form",
              "href":"http://ffz-sandbox-2.epdemos.com/cortex/carts/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/form"
           },
           {  
              "rel":"cartmemberships",
              "type":"carts.read-cart-memberships",
              "uri":"/carts/memberships/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=",
              "href":"http://ffz-sandbox-2.epdemos.com/cortex/carts/memberships/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk="
           },
           {  
              "rel":"definition",
              "rev":"item",
              "type":"itemdefinitions.item-definition",
              "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=",
              "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk="
           },
           {  
              "rel":"code",
              "rev":"item",
              "type":"items.code-for-item",
              "uri":"/items/code/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=",
              "href":"http://ffz-sandbox-2.epdemos.com/cortex/items/code/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk="
           },
           {  
              "rel":"offer",
              "type":"offers.offer",
              "uri":"/offers/wawastore/qgqvbolcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g64y=",
              "href":"http://ffz-sandbox-2.epdemos.com/cortex/offers/wawastore/qgqvbolcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g64y="
           },
           {  
              "rel":"price",
              "rev":"item",
              "type":"prices.price-for-item",
              "uri":"/prices/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=",
              "href":"http://ffz-sandbox-2.epdemos.com/cortex/prices/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk="
           },
           {  
              "rel":"appliedpromotions",
              "rev":"item",
              "type":"promotions.applied-promotions-for-item",
              "uri":"/promotions/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/applied",
              "href":"http://ffz-sandbox-2.epdemos.com/cortex/promotions/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/applied"
           },
           {  
              "rel":"recommendations",
              "type":"recommendations.item-recommendation-groups",
              "uri":"/recommendations/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=",
              "href":"http://ffz-sandbox-2.epdemos.com/cortex/recommendations/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk="
           },
           {  
              "rel":"addtowishlistform",
              "type":"wishlists.add-item-to-wishlist-form",
              "uri":"/wishlists/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/form",
              "href":"http://ffz-sandbox-2.epdemos.com/cortex/wishlists/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/form"
           },
           {  
              "rel":"wishlistmemberships",
              "type":"wishlists.read-wishlist-memberships",
              "uri":"/wishlists/memberships/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=",
              "href":"http://ffz-sandbox-2.epdemos.com/cortex/wishlists/memberships/items/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk="
           }
        ],
        "_definition":[  
           {  
              "_components":[  
                 {  
                    "_element":[  
                       {  
                          "self":{  
                             "type":"itemdefinitions.item-definition-component",
                             "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsinddmrstkobsgewteylbguwtiyzwmqwwen3bmmwtqobvmmytgyjxha2tknq=",
                             "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsinddmrstkobsgewteylbguwtiyzwmqwwen3bmmwtqobvmmytgyjxha2tknq="
                          },
                          "messages":[  
     
                          ],
                          "links":[  
                             {  
                                "rel":"list",
                                "type":"itemdefinitions.item-definition-components",
                                "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components",
                                "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components"
                             },
                             {  
                                "rel":"standaloneitem",
                                "type":"items.item",
                                "uri":"/items/wawastore/qgqvhk3dmfzgc3lfnrpxg23v=",
                                "href":"http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/qgqvhk3dmfzgc3lfnrpxg23v="
                             }
                          ],
                          "details":[  
                             {  
                                "display-name":"Short Description",
                                "display-value":"Caramel",
                                "name":"short_description",
                                "value":"Caramel"
                             },
                             {  
                                "display-name":"Long Description",
                                "display-value":"Caramel",
                                "name":"long_description",
                                "value":"Caramel"
                             },
                             {  
                                "display-name":"Display Name",
                                "display-value":"Caramel",
                                "name":"display_name",
                                "value":"Caramel"
                             }
                          ],
                          "display-name":"Caramel",
                          "quantity":1
                       },
                       {  
                          "self":{  
                             "type":"itemdefinitions.item-definition-component",
                             "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizq=",
                             "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizq="
                          },
                          "messages":[  
     
                          ],
                          "links":[  
                             {  
                                "rel":"list",
                                "type":"itemdefinitions.item-definition-components",
                                "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components",
                                "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components"
                             },
                             {  
                                "rel":"components",
                                "rev":"definition",
                                "type":"itemdefinitions.item-definition-nested-components",
                                "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizq=/components",
                                "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizq=/components"
                             },
                             {  
                                "rel":"standaloneitem",
                                "type":"items.item",
                                "uri":"/items/wawastore/qgqvhn3covxgi3dfl5wws3dll5rwc4tbnvswyx3tnn2q=",
                                "href":"http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/qgqvhn3covxgi3dfl5wws3dll5rwc4tbnvswyx3tnn2q="
                             }
                          ],
                          "_components":[  
                             {  
                                "_element":[  
                                   {  
                                      "self":{  
                                         "type":"itemdefinitions.item-definition-component",
                                         "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/slmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizwzerrtqyrwmmztiobngezweyzngrtdqojnmizwgzrnmm2tinrzmmywiyryge3q=",
                                         "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/slmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizwzerrtqyrwmmztiobngezweyzngrtdqojnmizwgzrnmm2tinrzmmywiyryge3q="
                                      },
                                      "messages":[  
     
                                      ],
                                      "links":[  
                                         {  
                                            "rel":"list",
                                            "type":"itemdefinitions.item-definition-nested-components",
                                            "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizq=/components",
                                            "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizq=/components"
                                         },
                                         {  
                                            "rel":"standaloneitem",
                                            "type":"items.item",
                                            "uri":"/items/wawastore/qgqvhllbnrww63tel43dax3dmfwa=",
                                            "href":"http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/qgqvhllbnrww63tel43dax3dmfwa="
                                         }
                                      ],
                                      "details":[  
                                         {  
                                            "display-name":"Short Description",
                                            "display-value":"Almond 60 cal",
                                            "name":"short_description",
                                            "value":"Almond 60 cal"
                                         },
                                         {  
                                            "display-name":"Long Description",
                                            "display-value":"Almond 60 cal",
                                            "name":"long_description",
                                            "value":"Almond 60 cal"
                                         },
                                         {  
                                            "display-name":"Display Name",
                                            "display-value":"Almond 60 cal",
                                            "name":"display_name",
                                            "value":"Almond 60 cal"
                                         }
                                      ],
                                      "display-name":"Milk",
                                      "quantity":1
                                   },
                                   {  
                                      "self":{  
                                         "type":"itemdefinitions.item-definition-component",
                                         "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/slmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizwzeqytemdcme3wmmjngyztgobngq3denrnha2wcyrngm2tgy3ehe2dcmryguyq=",
                                         "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/slmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizwzeqytemdcme3wmmjngyztgobngq3denrnha2wcyrngm2tgy3ehe2dcmryguyq="
                                      },
                                      "messages":[  
     
                                      ],
                                      "links":[  
                                         {  
                                            "rel":"list",
                                            "type":"itemdefinitions.item-definition-nested-components",
                                            "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizq=/components",
                                            "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsinddgbrdoztehawwmm3chawtiyjxmqwtqmjrgmwwgylehftdimbxmzrdizq=/components"
                                         },
                                         {  
                                            "rel":"standaloneitem",
                                            "type":"items.item",
                                            "uri":"/items/wawastore/qgqvhk3tnnuw2xzwgbpwgylm=",
                                            "href":"http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/qgqvhk3tnnuw2xzwgbpwgylm="
                                         }
                                      ],
                                      "details":[  
                                         {  
                                            "display-name":"Short Description",
                                            "display-value":"Skim 60 cal",
                                            "name":"short_description",
                                            "value":"Skim 60 cal"
                                         },
                                         {  
                                            "display-name":"Long Description",
                                            "display-value":"Skim 60 cal",
                                            "name":"long_description",
                                            "value":"Skim 60 cal"
                                         },
                                         {  
                                            "display-name":"Display Name",
                                            "display-value":"Skim 60 cal",
                                            "name":"display_name",
                                            "value":"Skim 60 cal"
                                         }
                                      ],
                                      "display-name":"Milk",
                                      "quantity":1
                                   }
                                ]
                             }
                          ],
                          "details":[  
     
                          ],
                          "display-name":"Bundle Milk Caramel",
                          "quantity":1
                       },
                       {  
                          "self":{  
                             "type":"itemdefinitions.item-definition-component",
                             "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgza=",
                             "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgza="
                          },
                          "messages":[  
     
                          ],
                          "links":[  
                             {  
                                "rel":"list",
                                "type":"itemdefinitions.item-definition-components",
                                "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components",
                                "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components"
                             },
                             {  
                                "rel":"components",
                                "rev":"definition",
                                "type":"itemdefinitions.item-definition-nested-components",
                                "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgza=/components",
                                "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgza=/components"
                             },
                             {  
                                "rel":"standaloneitem",
                                "type":"items.item",
                                "uri":"/items/wawastore/qgqvho3covxgi3dfl5yxkylooruxi6k7mnqxeylnmvwf643lou=",
                                "href":"http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/qgqvho3covxgi3dfl5yxkylooruxi6k7mnqxeylnmvwf643lou="
                             }
                          ],
                          "_components":[  
                             {  
                                "_element":[  
                                   {  
                                      "self":{  
                                         "type":"itemdefinitions.item-definition-component",
                                         "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/slmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgzgzerrgizjtmi3dazjnmqzdmmrngrqtgyrnmiydoyrnmfrgkmrrmfqtcnzumzsa=",
                                         "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/slmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgzgzerrgizjtmi3dazjnmqzdmmrngrqtgyrnmiydoyrnmfrgkmrrmfqtcnzumzsa="
                                      },
                                      "messages":[  
     
                                      ],
                                      "links":[  
                                         {  
                                            "rel":"list",
                                            "type":"itemdefinitions.item-definition-nested-components",
                                            "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgza=/components",
                                            "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgza=/components"
                                         },
                                         {  
                                            "rel":"standaloneitem",
                                            "type":"items.item",
                                            "uri":"/items/wawastore/qgqvhjbrgjxxu=",
                                            "href":"http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/qgqvhjbrgjxxu="
                                         }
                                      ],
                                      "details":[  
                                         {  
                                            "display-name":"Short Description",
                                            "display-value":"12oz",
                                            "name":"short_description",
                                            "value":"12oz"
                                         },
                                         {  
                                            "display-name":"Long Description",
                                            "display-value":"12oz",
                                            "name":"long_description",
                                            "value":"12oz"
                                         },
                                         {  
                                            "display-name":"Display Name",
                                            "display-value":"12oz",
                                            "name":"display_name",
                                            "value":"12oz"
                                         }
                                      ],
                                      "display-name":"Quantity",
                                      "quantity":1
                                   },
                                   {  
                                      "self":{  
                                         "type":"itemdefinitions.item-definition-component",
                                         "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/slmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgzgzeq3tkztggnrtkzbnmyydkmrngqzgkmjnmezgcyjnhezdomrwme2gmmzvmizq=",
                                         "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/slmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgzgzeq3tkztggnrtkzbnmyydkmrngqzgkmjnmezgcyjnhezdomrwme2gmmzvmizq="
                                      },
                                      "messages":[  
     
                                      ],
                                      "links":[  
                                         {  
                                            "rel":"list",
                                            "type":"itemdefinitions.item-definition-nested-components",
                                            "uri":"/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgza=/components",
                                            "href":"http://ffz-sandbox-2.epdemos.com/cortex/itemdefinitions/wawastore/qgqvhplcovxgi3dfl5rwc4tbnvswyx3nmfrwg2djmf2g6427onvxk=/components/shmsimjtge4tizbvgiwwmzrrmiwtizjvhewwemrvgywtamzugq4tcnldmq3wgza=/components"
                                         },
                                         {  
                                            "rel":"standaloneitem",
                                            "type":"items.item",
                                            "uri":"/items/wawastore/qgqvhjbrgzxxu=",
                                            "href":"http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/qgqvhjbrgzxxu="
                                         }
                                      ],
                                      "details":[  
                                         {  
                                            "display-name":"Short Description",
                                            "display-value":"16oz",
                                            "name":"short_description",
                                            "value":"16oz"
                                         },
                                         {  
                                            "display-name":"Long Description",
                                            "display-value":"16oz",
                                            "name":"long_description",
                                            "value":"16oz"
                                         },
                                         {  
                                            "display-name":"Display Name",
                                            "display-value":"16oz",
                                            "name":"display_name",
                                            "value":"16oz"
                                         }
                                      ],
                                      "display-name":"Quantity",
                                      "quantity":1
                                   }
                                ]
                             }
                          ],
                          "details":[  
     
                          ],
                          "display-name":"Bundle Quantity Caramel",
                          "quantity":1
                       }
                    ]
                 }
              ]
           }
        ],
        "_recommendations":[  
           {  
              "_accessory":[  
                 {  
                    "_element":[  
                       {  
                          "_code":[  
                             {  
                                "self":{  
                                   "type":"items.code-for-item",
                                   "uri":"/items/code/items/wawastore/qgqvhmtfpb2heyk7mvzxa4tfonzw6x3tnn2q=",
                                   "href":"http://ffz-sandbox-2.epdemos.com/cortex/items/code/items/wawastore/qgqvhmtfpb2heyk7mvzxa4tfonzw6x3tnn2q="
                                },
                                "messages":[  
     
                                ],
                                "links":[  
                                   {  
                                      "rel":"item",
                                      "rev":"code",
                                      "type":"items.item",
                                      "uri":"/items/wawastore/qgqvhmtfpb2heyk7mvzxa4tfonzw6x3tnn2q=",
                                      "href":"http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/qgqvhmtfpb2heyk7mvzxa4tfonzw6x3tnn2q="
                                   }
                                ],
                                "code":"extra_espresso_sku"
                             }
                          ]
                       }
                    ]
                 }
              ]
           }
        ]
}


const itemData1 =  [{
	"details": "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffeaspecies. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean.   ",
	"skuId": "SKU1",
	"src": "https://nrai.org/site/wp-content/uploads/2019/02/1525719995-9006.jpg"
}, {
	"details": "Espresso is coffee of Italian origin, brewed by expressing or forcing a small amount of nearly boiling water under pressure through finely ground coffee beans. ",
	"skuId": "SKU2",
	"src": "https://nrai.org/site/wp-content/uploads/2019/02/1525719995-9006.jpg"
}]




if(window.location.hostname != 'localhost'){
   //const mock = new MockAdapter(Axios);
   //mock.onPost('http://ffz-sandbox-2.epdemos.com/cortex/oauth2/tokens').reply(200,tokensData);
   //mock.onPost('http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/lookups/form?zoom=price,definition:components:element,definition:components:element:components:element,recommendations:accessory:element:code&followlocation').reply(200,itemData);

    }