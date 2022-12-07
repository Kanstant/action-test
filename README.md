# action-test
## Inputs

### `GITHUB_TOKEN`

**Required** The GH Token used to access the API.

### `the_input`

**Optional** The Input string to ptint. Default: ''

## Outputs

### `the_output`

just the output string.

## Example usage

```yaml
uses: kanstant/action-test@main
with:
  GITHUB_TOKEN: '12345'
  the_input: 'Here is the Input string'
```