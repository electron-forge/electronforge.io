# electronforge.io

This is the React App that powers https://beta.electronforge.io

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.

```
git clone https://github.com/marshallofsound/electronforge.io.git
```

* Then install the dependencies:

```
yarn
```

* Run development server:

```
yarn start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
yarn dev
```

Open the web browser to `http://localhost:8888/`

### To build the production package

```
yarn build
```

### Deployment

Currently we deploy this site with `now`

```bash
now --alias beta.electronforge.io
```

**NOTE:** This will only work on a device with an access token granting permission to deploy to our domain.
