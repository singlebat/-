({
    saveRecord : function(component, event, helper) {
        var action = component.get("c.getInfo");
        //パラメータ設定
        action.setParams({
            "SId": component.get("v.recordId"),
            "lookupId":component.get("v.lookup")
        });
        //メソッド実行
        $A.enqueueAction(action);
        action.setCallback(this, function(res) {
            var state = res.getState();
            if (state == "SUCCESS") {
                var urlEvent = $A.get("e.force:navigateToURL");
                urlEvent.setParams({
                    "url": 'https://nexus-dashboard--wfdev01.lightning.force.com/' + res.getReturnValue().Id
                });
                urlEvent.fire();
            }else{
                
            }
        });
    },
    cancel:function(component,event,helper){
        $A.get("e.force:closeQuickAction").fire();
    },
    doInit : function(component, event, helper) {
        var h=window.innerHeight;
        var s=(h-360)/2;
        component.set('v.marginheight',s);
    },
    
})