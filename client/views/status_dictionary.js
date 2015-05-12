import TelemetryIndex from "../telemetry_index";

const gpsStatuses = {
  0: "Doing position fixes",
  1: "SV timing",
  2: "Approximate timing",
  3: "GPS time",
  4: "Need initialization",
  5: "GDOP needed",
  6: "Bad timing",
  7: "No usable satellite",
  8: "Track 1 satellite",
  9: "Track 2 satellite",
  10: "Track 3 satellite",
  11: "Bad integrity",
  12: "No vel available",
  13: "Unusable fix"
};

const statusById = {
  "STATUS": {
    0: "Disconnected",
    1: "Connected"
  },
  "USLAB000012": {
    0: "Default",
    1: "Wait",
    2: "Reserved",
    3: "Standby",
    4: "CMG attitude control",
    5: "CMG thruster assist",
    6: "User data generation",
    7: "Free drift"
  },
  "USLAB000013": {
    0: "None",
    1: "GPS 1",
    2: "GPS 2",
    3: "Russian",
    4: "Ku band"
  },
  "USLAB000014": {
    0: "None",
    1: "RGA 1",
    2: "RGA 2",
    3: "Russian"
  },
  "USLAB000016": {
    0: "Attitude hold",
    1: "Momentum management"
  },
  "USLAB000017": {
    0: "LVLH",
    1: "J2000",
    2: "XPOP"
  },
  "USLAB000043": gpsStatuses,
  "USLAB000044": gpsStatuses,
  "USLAB000086": {
    1: "Standard",
    2: "Microgravity",
    4: "Reboost",
    8: "Proximity Ops",
    16: "External Ops",
    32: "Survival",
    64: "Assured Safe Crew Return"
  }
};

const statuses = {};
for (let id in statusById) {
  statuses[TelemetryIndex.number(id)] = statusById[id];
}

class StatusDictionary {
  static get(telemetryNumber) {
    return statuses[telemetryNumber];
  }
}

export {StatusDictionary as default};