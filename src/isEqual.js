function isEqual(target1, target2) {
  if (target1 === target2) {
    return true;
  } else if (isObject(target1) && isObject(target2)) {
    const k1 = Object.keys(target1);
    const k2 = Object.keys(target2);
    if (k1.length !== k2.length) {
      return false;
    }
    for (const k of k1) {
      if (isEqual(target1[k], target2[k])) {
        return true;
      }
      return false;
    }
  } else {
    return false;
  }
}

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}
