export const USER_NAME_KEY = "userName";

export const getUserName = () => {
	return localStorage.getItem(USER_NAME_KEY);
};

export const setUserName = (name) => {
	localStorage.setItem(USER_NAME_KEY, name);
};

export const hasUserName = () => {
	return !!getUserName();
};

export const getPersonalizedMessage = (message, fallback = "") => {
	const userName = getUserName();
	return userName ? message.replace("[Name]", userName) : fallback;
};





