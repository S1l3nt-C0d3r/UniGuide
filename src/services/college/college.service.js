export const collegeRequest = async (prefs) => {
  if (!prefs) throw new Error("Preferences not provided");
  const result= await fetch("https://uniguide-2fe6c.web.app/college.mock.json");
  const res= await result.json();

  const collegesObj=res.colleges[0];
  const allColleges = Object.values(collegesObj);

  const suggested = allColleges.filter((college) => {
    const streamMatch = college.stream === prefs.stream;
    const typeMatch = prefs.collegeType === "Both" || college.type === prefs.collegeType;
    const stateMatch =
      prefs.preferredStates.includes("All") ||
      prefs.preferredStates.some(
        (state) => state.toLowerCase() === college.state.toLowerCase()
      );
    return streamMatch && typeMatch && stateMatch;
  });

  const others = allColleges.filter(
    (college) => !suggested.includes(college) && college.stream === prefs.stream
  );

  return { suggested, others };
};