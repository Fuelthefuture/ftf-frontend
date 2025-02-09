// /** @type {import('tailwindcss').Config} */
// export const content = ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"];
// export const theme = {
//   extend: {},
// };
// export const plugins = [];

/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"];
export const theme = {
	extend: {
		keyframes: {
			gradient: {
				"0%, 100%": { backgroundPosition: "0% 50%" },
				"50%": { backgroundPosition: "100% 50%" },
			},
		},
		animation: {
			gradient: "gradient 8s ease infinite",
		},
	},
};
export const plugins = [];
