module.exports = {
    SERVER_HOST: '127.0.0.1',
    SERVER_PORT: '9900',
    JWT_SECRET_KEY: 'iohsdagfawuguabsa',
    JWT_EXPIRES: '10h',
    DATA_HOST: '127.0.0.1',
    DATA_PORT: '3306',
    DATA_NAME: 'my_db',
    DATA_USERNAME: 'username',
    DATA_PASSWORD: 'password',
    SESSION_SECRET_KEY:'abdkawjfi',
    EMAIL_USERNAME: 'xxxxxx@163.com',
    EMAIL_STMP_HOST: 'smtp.163.com',
    EMAIL_PASSWORD: 'JSLDJKSNDSNA',
    EMAIL_PORT: 465,
    UNLESS_PATH: [
                    '/api/login', 
                    '/api/forget', 
                    '/api/register', 
                    '/api/code', 
                    '/api/code1', 
                    '/uploads/cover', 
                    '/api/post/list', 
                    '/api/post/list/fliter', 
                    '/api/post/get_post', 
                    '/api/comment/get_comment',
                    '/api/cate/list'
                ]
}