jQuery("#simulation")
  .on("click", ".s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-star-1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1 svg" ],
                    "attributes": {
                      "overlay": "#FACA51"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_3 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_1 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_4 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_2 svg" ],
                    "attributes": {
                      "overlay": "#252525"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_1 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1 svg" ],
                    "attributes": {
                      "overlay": "#FACA51"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_3 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_4 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_2 svg" ],
                    "attributes": {
                      "overlay": "#252525"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_2 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_1 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1 svg" ],
                    "attributes": {
                      "overlay": "#FACA51"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_3 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_4 svg" ],
                    "attributes": {
                      "overlay": "#252525"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_2 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_1 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_3 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1 svg" ],
                    "attributes": {
                      "overlay": "#FACA51"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_4 svg" ],
                    "attributes": {
                      "overlay": "#252525"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_2 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_1 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_4 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1_3 svg",
                  "#s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 #s-star-1 svg" ],
                    "attributes": {
                      "overlay": "#FACA51"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-a9b37ec2-b5dc-4d18-9dee-7aeb45484e52 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-spinner-2_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 2000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_23" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-spinner-2_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 2000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "1140.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "640.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Image" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "top": {
                      "type": "pinend",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "pincenter",
                      "value": "0.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_23","#s-Image_21","#s-Image_22","#s-Table_1","#s-Image_25","#s-Image_24" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 2000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_3","#s-Image_1","#s-Group_1","#s-Image_4","#s-Image_5","#s-Image_2" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 1500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_3","#s-Image_5","#s-Image_4","#s-Image_1","#s-Image_2" ],
                    "width": {
                      "type": "percentage",
                      "value": "40.0"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Image_4","#s-Image_2" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "70.0"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "-30.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Image_3" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "-30.0"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "-60.0"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-stars","#s-Image_20" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });