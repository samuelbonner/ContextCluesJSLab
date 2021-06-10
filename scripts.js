var friends = ["Abigail", "Casper", "Glenn", "Tom", "Vaz'garolvur'gizeth the Soulflayer"]
var locations = ["Greenhouse", "Library", "Soccer Field", "Innovation Depot", "Rocket Factory", "Poop Lab", "Slimy Cave", "Circle of Eternal Damnation", "Spider Web", "Behind the Wendy's on Highway 78"]
var weapons = ["Axe", "Flail", "Wand", "Scythe", "Sword", "Dagger", "Halberd", "Warhammer", "Spear", "Nunchucks", "Trident", "Glaive", "Pitchfork", "Mace", "Saber", "Rapier", "Cutlass", "Scimitar", "Machete", "Chainsaw", ]
console.log("Friends array has " + friends.length + " items.")
console.log("Locations array has " + locations.length + " items.")
console.log("Weapons array has " + weapons.length + " items.")

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 100; i++) {
        var accusationH3 = document.createElement('h3');
        var accusationText = document.createTextNode("Accusation " + i);
        accusationH3.appendChild(accusationText);
        accusationH3.id = (i);

        accusationH3.addEventListener('click', function () {
            clickAlert(i);
        })

        document.getElementById("accusationHeaders").appendChild(accusationH3);
    }
})

    function clickAlert(e) {
            var friend = e % friends.length;
            console.log("Friend # " + friend);
            var location = e % locations.length;
            console.log("Location # " + location);
            var weapon = e % weapons.length;
            console.log("Weapon # " + weapon);
            alert('I accuse ' + friends[friend] + ' with the ' + weapons[weapon] + ' in the ' + locations[location] + '!');
    }