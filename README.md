# prepv v0.0.1

Prepare your package to be distributed.

`prepv` is short for "prepare version".

### prepv -i

The `-i` flag merges `.npmignore` into `.gitignore`.

- `.gitignore` is stripped of patterns negated by `.npmignore`
- `.npmignore` is merged into `.gitignore` without duplicates
- `.npmignore` is deleted
