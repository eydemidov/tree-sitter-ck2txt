# tree-sitter-ck2txt
A tree sitter plugin for CK2 files. Should other for other PDX titles as well.

# Usage
## With NeoVim (using Lazy)

### Build the parser
`tree-sitter generate && tree-sitter build`

### Configure
In neovim's lua config (make sure to set the url to the directory where you cloned the plugin):

```lua
local parser_config = require "nvim-treesitter.parsers".get_parser_configs()
parser_config.ck2txt = {
  install_info = {
    url = "<path to the plugin directory>",
    files = { "src/parser.c" },
  },
  filetype = "ck2txt"
}

vim.api.nvim_create_autocmd("BufRead", {
  pattern = "*.txt",
  callback = function()
    local file = vim.fn.expand("%:p")
    if file:match("Crusader Kings II") then
      vim.bo.filetype = "ck2txt"
    end
  end
})

vim.treesitter.language.register("ck2txt", "ck2txt")
```


### Install Treesitter plugin
In neovim:
`:TSInstall ck2txt`
