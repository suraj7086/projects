import sublime
import sublime_plugin

# Sublime executes this every time it loads the plugin, which includes when
# it first starts, as well as whenever the this file changes on disk.
def plugin_loaded():
    settings = sublime.load_settings("auto_save.sublime-settings")
    if settings.get("auto_save_toggle_at_startup", False):
        sublime.set_timeout(lambda: sublime.run_command("auto_save"), 1000)