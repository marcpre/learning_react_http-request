# learning_react-http-request

## react-router-dom

Using the  [above package](https://github.com/ReactTraining/react-router) to add routing to react.

Define Route using:

`<Route path="/" exact component={Posts} />`

### Link Property

Use the Link property to not lose the state:

```
 <li><Link to={{
     pathname: '/new-post',
     hash: '#submit',
     search: '?quick-submit=true'
 }}>New Post</Link></li>
```

###Using Route-Parameters

`<Route path="/:id" exact component={Posts} />`

###Render only 1 Route

Use `Switch` for that.

### 404 Case

`<Route render={ () => <h1>Not found!</h1> } />`

--> Paused at 190
