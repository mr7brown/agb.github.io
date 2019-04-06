---
title: Configure Developer Account Settings
tags: [getting_started]
summary: "The purpose of this document is to enable access to the Google
Assistant API. This API is needed to embed the Google Assistant's actions into
an OEM device."
sidebar: mydoc_sidebar
permalink: mydoc_google_developer_account.html
folder: mydoc
---

## Overview

A Google Cloud Platform project, managed by the Actions Console, gives your
project access to the Google Assistant API. The project tracks quota usage and
gives you valuable metrics for the requests made from your device.

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
