class GameParse {
    static Initialization() {
        for (var p in MessageID) {
            var classDef = egret.getDefinitionByName(p);
            SocketManager.getInstance().Agree[p] = new classDef;
        }
    }
}