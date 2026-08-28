#!/bin/sh

set -eu

history_file="History.md"
current_version="$(node -p "require('./package.json').version")"
current_date="$(date +%Y-%m-%d)"

if [ ! -f "$history_file" ]; then
  echo "Missing $history_file" >&2
  exit 1
fi

last_tag="$(git describe --abbrev=0 --tags 2>/dev/null || true)"

if [ -n "$last_tag" ]; then
  range="$last_tag..HEAD"
  commit_log="$(git log --pretty=format:'- %s' "$range" || true)"
  stat_line="$(git diff "$last_tag" --stat | awk 'END { print }')"
else
  commit_log="$(git log --pretty=format:'- %s' || true)"
  stat_line="$(git diff --stat | awk 'END { print }')"
fi

title="v$current_version / $current_date"
title_underline="$(printf '%s' "$title" | sed 's/./=/g')"

tmp_file="$(mktemp)"

{
  printf '\n%s\n%s\n\n' "$title" "$title_underline"

  if [ -n "$commit_log" ]; then
    printf '%s\n\n' "$commit_log"
  fi

  if [ -n "$stat_line" ]; then
    printf '%s\n\n' "$stat_line"
  fi

  cat "$history_file"
} > "$tmp_file"

mv "$tmp_file" "$history_file"

echo "Updated $history_file"
