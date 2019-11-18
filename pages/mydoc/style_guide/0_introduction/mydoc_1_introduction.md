---
title: Personal Site Layout
tags:
keywords: "annotations, comments, feedback"
last_updated: "TBD"
summary: "This is the general layout that I need to use for my personal site."
sidebar: mydoc_sidebar
permalink: mydoc_commenting_on_files.html
folder: mydoc
---

## Sections

The following sections need to be included in my personal website. This may be added to over time, but it is a pretty good start for laying everything out.

These sections will become top bar navigation.


### Resume

In the resume section I need to have a static, dedicated page where I can list my portfolio, education, etc. Additionally, I need to include a tooling section to showcase the tools and applications that I'm able to use.

I also need to include a pdf document that can be downloaded and viewed locally.

### Documentation

I need to have examples of the various types of documentation that I've created. Below are the categories that I need to have at a minimum.

* Developer documentation
** Google – RPI3
** Google – Partner on-boarding and the partner journey map
** I need to do some personal projects: API, RPI3, general developer projects
** Highlight the terminal and version control using git
* Technical Specifications
** HBO – Audio/Video Technical Specifications
** Universal – See if there are any specs that I can find and use
* Financial
** M&T Bank
* PM
** All of the FB documentation.

### Style Guide

The style guide should show that I have the ability to create a style guide and should be industry agnostic.

After highlighting the sections of the style guide, I should have sections for the different types of technical writing:

* Developer
* Technical Specifications
* Non-Technical

### Contact 

Page should have a simple form to send an email to me and should have a visual showing that I'm currently in NY.

I also need to include links to social media at the bottom of each page in the footer.

```
{% raw %}{% if site.github_editme_path %}

<a target="_blank" href="https://github.com/{{site.github_editme_path}}/{{page.folder}}{{page.url | append: ".md"}}{% endif %}" class="btn btn-default githubEditButton" role="button"><i class="fa fa-github fa-lg"></i> Edit me</a>

{% endif %}{% endraw %}
```

and here for GitLab:


```
{% raw %}{% if site.gitlab_editme_path %}

<a target="_blank" href="https://github.com/{{site.gitlab_editme_path}}/{{page.folder}}{{page.url | append: ".md"}}{% endif %}" class="btn btn-default githubEditButton" role="button"><i class="fa fa-gitlab fa-lg"></i> Edit me</a>

{% endif %}{% endraw %}
```

In your configuration file, edit the value for `github_editme_path` (or for Gitlab: `gitlab_editme_path`). For example, you might create a branch called "reviews" on your Github repo. Then you would add something like this in your configuration file for the 'github_editme_path': tomjoht/documentation-theme-jekyll/edit/reviews. Here "tomjoht" is my github account name. The repo name is "documentation-theme-jekyll". The "reviews" name is the branch.

To suppress this button, comment out the `github_editme_path` in the \_config.yml file.

## Add reviewers as collaborators

If you want people to collaborate on your project so that their edits get committed to a branch on your project, you need to add them as collaborators. For your Github repo, click **Settings** and add the collaborators on the Collaborators tab using their Github usernames.

If you don't want to allow anyone to commit to your Github branch, don't add the reviewers as collaborators. When someone makes an edit, Github will fork the theme. The person's edit then will appear as a pull request to your repo. You can then choose to merge the change indicated in the pull or not.

{% include note.html content="When you process pull requests, you have to accept everything or nothing. You can't pick and choose which changes you'll merge. Therefore you'll probably want to edit the branch you're planning to merge or ask the contributor to make some changes to the fork before processing the pull request." %}


## Workflow

Users will make edits in your "reviews" branch (or whatever you want to call it). You can then commit those edits as you make updates.

When you're finished making all updates in the branch, you can merge the branch into the master.

Note that if you're making updates online, those updates will be out of sync with any local edits.

{% include warning.html content="Don't make edits both online using Github's browser-based interface AND offline on your local machine using your local tools. When you try to push from your local, you'll likely get a merge conflict error. Instead, make sure you do a pull and update on your local after making any edits online." %}

## Prose.io

 Prose.io is an overlay on Github that would allow people to make comments in an easier interface. If you simply go to [prose.io](http://prose.io), it asks to authorize your Github account, and so it will read files directly from Github but in the Prose.io interface.

 {% include links.html %}
