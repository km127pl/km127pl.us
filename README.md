# km127pl.us

### Running
1. Install all of the dependencies
```sh
yarn install --production
# or for development mode
yarn install
```
2. Run the website
```sh
yarn run start
# or for development mode
yarn run dev:webserver
```

#### Running (Docker)
1. Build the docker image
```sh
docker build . -t <your name>/website
# or pull ours
docker pull ghcr.io/km127pl/km127pl.us:master
```
2. Run the docker image
```sh
docker run -p 8080:8080 -d <your name>/website
# or run ours
docker run -p 8080:8080 -d ghcr.io/km127pl/km127pl.us:master
```

### License
This project is licensed under the AGPL-3.0 license, see the [LICENSE](LICENSE) file for more information
