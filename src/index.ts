 import Server from './services/server';
 require('dotenv').config()

 Server.listen(process.env.PORT || 3000, () => {
     console.log('server is listen on port localhost: 3000')
 });
