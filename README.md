# Shrek Greeter

A Discord bot to play a special message from Shrek whenver a user joins a voice channel. Hosted as a single worker dyno on Heroku.

## Usage

### Local

Set discord bot token value in the `.env` file.

```
TOKEN=<token_value>
```

Start bot running with `make`

Alternatively:

Set `TOKEN` environment variable

```bash
export TOKEN=<token_value>
```

Start bot running with `npm start`

### Heroku

Should use Procfile to set just a worker node and run `npm start`

```
worker: npm start
```

**NOTE**: Ensure Heroku does not start a web dyno and that the worker dyno is running
