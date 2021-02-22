  //Filter out any action that doesn't happen this week
  export const filterWeekly = async (actions) => {
    let weekly = [];
    var curr = new Date(Date.now());
    var first = curr.getDate() - curr.getDay();
    var firstday = new Date(curr.setDate(first)).getTime();
    var lastday = firstday + 604800000;
    actions.forEach((a) => {
      if (
        new Date(a.deadline).getTime() <= lastday &&
        new Date(a.deadline).getTime() >= firstday
      ) {
        weekly.push(a);
      }
    });
    return weekly;
  };

  export const filterComplete = (actions) => {
    return actions.filter((a) => !a.complete);
  };

  