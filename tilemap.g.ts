// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020101010101020202020202020202020201010101010202020202020202020202010101010102020202020202020202020101010101020202020202020202020201010101010202020202020202020202010101010102020202020202020202020101010101010101010202010101010101010101010101010101010101010101010105050101010101010101010101010101010505010101010101010101010101010101010101010101010101010101010101010101010101010103030303030101010101040404040404030303030301010101010404040404040303030303010101010104040404040403030303030101010101040404040404`, img`
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 2 2 2 2 . 
2 2 2 2 2 . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . 2 2 2 2 2 2 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
