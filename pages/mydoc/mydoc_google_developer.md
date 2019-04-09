---
title: Google - Developer Account Configuration
summary: "The purpose of this document is to provide developers with
instructions for configuring a developer account on Google."
sidebar: mydoc_sidebar
permalink: mydoc_google_developer.html
folder: mydoc
---

## Overview

To access to Google Assistant SDK, developers will need to configure a project
and developer account settings in the Actions Console. These are the last
steps required before installing the SDK.

## Configure developer account and account settings

To enable access to the Google Assistant API, do the following:

1.  Open the Actions Console.<br><br>

    <a href="https://console.actions.google.com/" class="btn btn-primary">GO TO
    THE ACTIONS CONSOLE</a>

2.  Click on <b>Add/import project</b>.

3.  To create a new project, type a name in the Project name box and click <b>CREATE PROJECT</b>.

    Alternatively, if you already have an existing Google Cloud Platform project,
    you can select that project and import it.

    {% include image.html file="add-project-aog.png" alt="Example" %}

4.  If you created a new project, click the <b>Device registration</b> box near the bottom of the page. If you imported a previously-created project, this box will not be displayed; select the Device registration tab (under <b>ADVANCED OPTIONS</b>) from the left navbar.

    {% include image.html file="device-registration-card.png" alt="Example" %}

    Keep this browser tab open. You will use it to register a device model in a later step.

5.  Enable the Google Assistant API on the project you selected (see the Terms of Service). You need to do this in the Cloud Platform Console.

    <a href="https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview" class="btn btn-primary">ENABLE API</a><br>

    Click <b>Enable<b>.

6.  You must configure the OAuth consent screen for your project in the Cloud Platform Console. Note that most fields on this page are optional.

{% include image.html file="consent-oauth_censored.png" alt="Example" %}

### Set activity controls for your account

In order to use the Google Assistant, you must share certain activity data with Google. The Google Assistant needs this data to function properly; this is not specific to the SDK.

Open the Activity Controls page for the Google account that you want to use with the Assistant. You can use any Google account, it does not need to be your developer account.

<b>Ensure the following toggle switches are enabled (blue)<b>:

* Web & App Activity
  * In addition, be sure to select the <b>Include Chrome history and activity from sites, apps, and devices that use Google services</b> checkbox.
* Device Information
* Voice & Audio Activity

## Install the SDK and reference code

These configurations can be used to install the SDK and reference code for your project.

### Configure Python virtual environment

Use a [Python virtual environment](https://docs.python.org/3/library/venv.html) to isolate the SDK and its dependencies from the system Python packages.

{% include important.html content="For the Pi, run all commands from the <b>/home/pi</b> directory." %}

Run the following commands for Python 3:
```
$ sudo apt-get update
$ sudo apt-get install python3-dev python3-venv
$ python3 -m venv env
$ env/bin/python -m pip install --upgrade pip setuptools wheel
$ source env/bin/activate
```

{% include important.html content="The rest of the SDK section was authored by
another writer, so it has been redacted. My portion of the documentation picks
back up at the <i>Complete test utterance</i> section." %}

### Complete test utterance

Now it's time to complete a test utterance. Once the utterance has been
completed successfully, you will be able to begin creating custom actions that
will work with your device.

In the command below:

1. Replace `my-dev-project` with the Google Cloud Platform project ID for the
[Actions Console](https://console.actions.google.com/) project you created.
* To find the project ID in the Actions Console, select the project, click the
gear icon, and select <b>Project settings</b>.
2. Replace `my-model` with the name of the model you created previously.
```
$ googlesamples-assistant-hotword --project-id my-dev-project --device-model-id my-model [--nickname device-nickname] [--query text-query]
```
3. Say test utterance. To initiate, say <i>Ok Google</i> or <i>Hey Google</i>,
followed by one of the following:
* <i>Tell me a joke</i>
* <i>What time is it in New York?</i>
* <i>What is the record for the Golden State Warriors?</i>

If the Assistant responds, you have successfully embedded the Assistant into
your Pi!
