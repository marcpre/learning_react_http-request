# learning_react-http-request

--> stopped at 175

## react-router-dom

Using the  [above package](https://github.com/ReactTraining/react-router) to add routing to react.

Define Route using:

`<Route path="/" exact component={Posts} />`

Use the Link property to not lose the state:

```
 <li><Link to={{
     pathname: '/new-post',
     hash: '#submit',
     search: '?quick-submit=true'
 }}>New Post</Link></li>
```
