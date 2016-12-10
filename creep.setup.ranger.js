var setup = new Creep.Setup('ranger');
setup.minControllerLevel = 4;
setup.globalMeasurement = true;
setup.measureByHome = true;
setup.maxCount = function(room){
    let maxRange = 2;
    let max = 0;
    let distance, flag;
    let calcMax = flagEntry => {
        distance = routeRange(room.name, flagEntry.roomName);
        if( distance > maxRange ) 
            return;
        flag = Game.flags[flagEntry.name];
    //    if( !flag.targetOf || flag.targetOf.length == 0 )
    //        {
                max++;
                console.log('Ranger needed for flag ' + flag + ' current need ' + max);}
//    }
    let flagEntries = FlagDir.filter(FLAG_COLOR.defense);
    console.log('Found defence flags ' + flagEntries);
    flagEntries.forEach(calcMax);
    console.log('Max rangers ' + max);
    return max;
};
setup.small = {
    fixedBody: [RANGED_ATTACK,MOVE,RANGED_ATTACK,MOVE,HEAL,MOVE],
    multiBody: [RANGED_ATTACK, MOVE],
    minAbsEnergyAvailable: 900,
    minEnergyAvailable: 0.5,
    maxMulti: 1,
    maxCount: setup.maxCount,
    maxWeight: null
};
setup.mid = {
    fixedBody: [RANGED_ATTACK,MOVE,RANGED_ATTACK,MOVE,RANGED_ATTACK,MOVE,HEAL,MOVE,HEAL,MOVE,HEAL,MOVE], 
    multiBody: [RANGED_ATTACK, MOVE], 
    minAbsEnergyAvailable: 2000, 
    minEnergyAvailable: 0.5,
    maxMulti: 10,
    maxCount: setup.maxCount,
    maxWeight: null
};
setup.big = {
    fixedBody: [RANGED_ATTACK,MOVE,RANGED_ATTACK,MOVE,RANGED_ATTACK,MOVE,RANGED_ATTACK,MOVE,RANGED_ATTACK,MOVE,HEAL,MOVE,HEAL,MOVE,HEAL,MOVE,HEAL,MOVE,HEAL,MOVE], 
    multiBody: [RANGED_ATTACK, MOVE], 
    minAbsEnergyAvailable: 2500,  
    minEnergyAvailable: 0.5,
    maxMulti: 15,
    maxCount: setup.maxCount,
    maxWeight: null
};
setup.RCL = {
    1: setup.none,
    2: setup.none,
    3: setup.none,
    4: setup.small,
    5: setup.mid,
    6: setup.mid,
    7: setup.big,
    8: setup.big
};
module.exports = setup;