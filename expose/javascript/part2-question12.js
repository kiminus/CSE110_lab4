let student = {
  name: "Sarah",
  major: "CS",
  "Grad Year": "2022",
  greeting: function () {
    console.log("hello");
  },
  "Favorite Teacher": {
    name: "TP",
    course: "CSE110",
  },
  courseLoad: ["CSE 110", "CSE 134", "VIS 41"],
};

console.log(student["courseLoad"][0]);
