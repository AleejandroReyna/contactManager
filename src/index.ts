 import Server from './services/server';

 Server.listen(process.env.PORT || 3000, () => {
     console.log('server is listen on port localhost: 3000')
 });
