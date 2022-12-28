export let type = {group: 'group project', personal: 'personal project'}
export let tag = {
  all: 'showAll', html:'html', css:'css', js:'javascript',
   java:'java', cs:'c#', angular:'angular', react: 'react', nodejs:'nodejs',
    mysql:'mysql', sqlserver:'sql server', mongodb: 'mongodb'}
let logo={
html:'assets/image/logo/html.svg',
css:'assets/image/logo/css.svg',
js:'assets/image/logo/js.svg',
bootstrap:'assets/image/logo/bootstrap.svg',
jquery:'assets/image/logo/jquery.svg',
nodejs:'assets/image/logo/nodejs.svg',
angular:'assets/image/logo/angular.svg',
java:'assets/image/logo/java.svg',
jsp:'assets/image/logo/jsp.svg',
jdbc:'https://anypoint.mulesoft.com/exchange/organizations/68ef9520-24e9-4cf2-b2f5-620025690913/assets/68ef9520-24e9-4cf2-b2f5-620025690913/jdbc-connector/icon/svg/?sha=dc8ae62a56617daca7812a5ef381299bd6603a05',
cs:'assets/image/logo/cs.svg',
dotNet:'https://slash.software/wp-content/uploads/2019/09/web-api-logo.png',
sqlServer:'assets/image/logo/sql-server.svg',
mySql:'assets/image/logo/mysql.svg',
flutter:'assets/image/logo/flutter.svg',
mongodb: 'https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png',
spring:'https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png',
react: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'}

export interface Project {
  id: string
  tag: string[]
  name: string
  logo: string[]
  type: string
  content: string
  source_1: string
  source_2: string
}

export let projects:Project[]= [
  {id: '1', tag:[tag.all, tag.html, tag.css, tag.js, tag.angular], name:'portfolio', logo:[logo.angular, logo.html, logo.css, logo.js, logo.bootstrap], type:type.personal, content:'Not use web template to introduce information about me, what skills i have and technology i have used', source_1:'#', source_2:''},
  {id:'2', tag:[tag.all, tag.react, tag.nodejs, tag.mongodb], name:'booking home', logo:[logo.react, logo.nodejs, logo.mongodb], type:type.group, content:'I do the job of filtering searches, updating user information, getting purchase history and evaluating purchased products', source_1:'https://github.com/khanhdoan09/homestay-server', source_2:'https://github.com/khanhdoan09/homestay-client'},
  {id: '3', tag:[tag.all, tag.cs, tag.sqlserver], name:'watch store', logo:[logo.cs, logo.dotNet, logo.sqlServer], type:type.group, content:' I write backend amin page which applied asp.net web api, linQ, entity framework', source_1:'https://github.com/khanhdoan09/watch-store', source_2:''},
  {id:'4', tag:[tag.all, tag.java], name:'web stream movie', logo:[logo.spring, logo.java, logo.mySql], type:type.personal, content:'I code backend for a website to watch movie online with spring boot', source_1:'https://github.com/khanhdoan09/movie_be', source_2:''},
  {id: '5', tag:[tag.all, tag.java, tag.mysql], name:'shoe e-commerce', logo:[logo.java, logo.jsp, logo.jdbc,logo.jquery, logo.mySql], type:type.group, content:'I write backend for amin page, filter search, pagination which applied jsp and servlet', source_1:'https://github.com/khanhdoan09/ltw', source_2:''},
  {id: '6', tag:[tag.all, tag.java], name:'tetris game', logo:[logo.java], type:type.group, content:'I used design pattern(strategy pattern, observer pattern, singleton pattern) to translate language for this project', source_1:'https://github.com/khanhdoan09/TKHDT', source_2: ''},
  {id:'7', tag:[tag.all, tag.html, tag.css, tag.js], name:'pokemon game', logo:[logo.html, logo.css, logo.js], type:type.personal, content:'Create a game pokemon connection with vanilla js and scss', source_1:'https://github.com/khanhdoan09/pikachu_game', source_2:''},
  {id:'8', tag:[tag.all, tag.html, tag.css, tag.js, tag.angular], name:'app chat', logo:[logo.html, logo.css, logo.js, logo.angular], type:type.group, content:'use api firebase and api school to take on the task of sending and downloading messages in project', source_1:'https://github.com/khanhdoan09/Lap_Trinh_Frontend_Nhom31',  source_2:''},
]
