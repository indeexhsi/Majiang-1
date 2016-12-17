class HttpHandler {

    static sendMsgCallBack(URL: string, callback: Function, thisObj: any, param?: string, method: string = egret.URLRequestMethod.POST): void {

        var loader: egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;

        var request: egret.URLRequest = new egret.URLRequest(URL);
        request.method = method;

        if (param) {
            request.data = new egret.URLVariables(param);
        }

        loader.addEventListener(egret.Event.COMPLETE, function (event: egret.Event) {
            var loader: egret.URLLoader = <egret.URLLoader>event.target;
            var data: egret.URLVariables = loader.data;
            var obj: any = JSON.parse(data.toString());
            callback.call(thisObj, obj);
        }, this);

        loader.load(request);
    }
}