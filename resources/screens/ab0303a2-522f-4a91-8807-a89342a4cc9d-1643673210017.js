jQuery("#simulation")
  .on("pageload", ".s-ab0303a2-522f-4a91-8807-a89342a4cc9d .pageload", function(event, data) {
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
                    "target": [ "#s-Table_1","#s-Image_25","#s-spinner-2","#s-Image_22","#s-Image_24","#s-Image_23","#s-Image_21" ],
                    "effect": {
                      "type": "fade",
                      "duration": 2000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_3","#s-Image_5","#s-Image_4","#s-Image_1","#s-Image_2" ],
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
                      "value": "80.0"
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
                    "target": [ "#s-Image_20" ]
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