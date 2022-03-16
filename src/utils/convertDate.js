export const convertData = (data) => {
  if (data) {
    const mydate = new Date(data);
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][mydate.getMonth()];
    return mydate.getDate() + " " + month + " " + mydate.getFullYear();
  } else return "";
};
