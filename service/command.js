const members = {};

const interpretCommand = (id, params) => {
    if (!members[id]) {
        members[id] = {
            lastMute: 0,
            lastDeaf: 0
        };
    }

    const member = members[id];

    const { deafOld, deafNew, muteOld, muteNew } = params;

    const actionTime = new Date().getTime();

    if (deafOld !== deafNew) {
        if (!deafNew && deafOld && actionTime - member.lastDeaf < 1000) {
            console.log('Break Out');
        } else if (deafNew && !deafOld) {
            member.lastDeaf = actionTime;
        }
    } else if (muteOld !== muteNew) {
        if (!muteNew && muteOld && actionTime - member.lastMute < 1000) {
            console.log('Call To Arms')
        } else if (muteNew && !muteOld) {
            member.lastMute = actionTime;
        }
    }
};

module.exports = {
    interpretCommand
};