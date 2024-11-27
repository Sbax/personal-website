export const getAge = () => {
  const birthday = new Date(1992, 10, 16); // November 16, 1992 (month is zero-based)
  const today = new Date();

  const reachedBirthday =
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDate() < birthday.getDate());

  return (
    today.getFullYear() - birthday.getFullYear() + (reachedBirthday ? -1 : 0)
  );
};
