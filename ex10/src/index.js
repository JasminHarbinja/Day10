function myFunction(album) {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            relese_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add a record here
            artist: "Tom Odell",
            title: "Wrong Crowd",
            relese_year: 2016,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: false
        }
    };
    return myMusic[album];
}
console.log(myFunction(2));
module.exports = myFunction;