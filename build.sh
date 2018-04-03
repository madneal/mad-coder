#! /bin/bash

cd examplesite/themes/mad-coder/*

cp -r layouts examplesite/themes/mad-coder
cp -r static examplesite/themes/mad-coder
cp theme.toml examplesite/themes/mad-coder

cd examplesite
hugo server -w