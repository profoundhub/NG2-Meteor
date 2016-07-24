"use strict";
var parties_ts_1 = require('../collections/parties.ts');
function loadParties() {
    if (parties_ts_1.Parties.find().count() === 0) {
        var parties = [
            {
                'name': 'Dubstep-Free Zone',
                'description': 'Can we please just for an evening not listen to dubstep.',
                'location': 'Palo Alto'
            },
            {
                'name': 'All dubstep all the time',
                'description': 'Get it on!',
                'location': 'Palo Alto'
            },
            {
                'name': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.',
                'location': 'San Francisco'
            }
        ];
        for (var i = 0; i < parties.length; i++) {
            parties_ts_1.Parties.insert(parties[i]);
        }
    }
}
exports.loadParties = loadParties;
//# sourceMappingURL=load-parties.js.map