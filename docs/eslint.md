@Alexis Corbacho
@12/08/2021

# CRA TYPESCRIPT ESLINT CONFIGURATION

1. React comes with an eslint configuration pre-setted. Let’s remove this configuration so we can set a better one. To do this, remove the follow code from ‘package.json’ file

```javascript
"eslintConfig": {
   "extends":[
      "react-app",
      "react-app/jest"
   ]
}
```

2. Install eslint
```
npm install eslint --save-dev
```

3. Setup eslint
npx eslint --init


### resources
https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba