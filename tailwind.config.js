module.exports = {
	content: ['*.html'],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			colors: {
				'sir-lime' : '#c4d601',
				'sir-blue' : '#2c576d',
				'sir-header-blue' : '#026D9D',
				'sir-header-blue-light' : '#DAE7EF',
				'sir-gray-dark' : '#707070',
				'sir-gray-light' : '#ebebeb',
				'sir-green-dark' : '#005D64',
				'sir-green-light' : '#00757e',
				'sir-black' : '#333333',
				'sir-white' : '#F6F6F5',
				'sir-red' : '#BC321A',
			},
			fontSize: {
				'1.5xl': '1.375rem',
				'2.5xl' : '1.75rem',
			}
		},
	},
	plugins: [],
}
