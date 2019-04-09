---
title: Embedding the Google Assistant Using a Raspberry Pi 3
summary: "The purpose of this document was to provide 3rd party developers with
the initial steps for prototyping with the Raspberry Pi 3. I did not author
the process for registering the device model, so it has been excluded from this
doc."
sidebar: mydoc_sidebar
permalink: mydoc_google_rpi3.html
folder: mydoc
---

## Overview

Prior to prototyping, it is recommended that you use the Raspberryi Pi 3 (Pi)
to embed the Google Assistant and create custom actions that will work with
your device. This page provides a brief introduction to the Pi, the hardware
required to embed the Assistant, and how to install the Google Assistant SDK.

Test

### Required hardware

Before configuring your Pi, you will need the following components:

* Micro-USB cable
* USB microphone (see [recommended](https://www.adafruit.com/product/3367))
* Speaker (see recommended [USB](https://www.adafruit.com/products/3369) or [3.5mm-jack](https://www.sparkfun.com/products/14023))
* Ethernet cable (if you are not using WiFi)
* MicroSD card reader
* 8 GB or larger microSD card (with [NOOBS](https://www.raspberrypi.org/downloads/noobs/)pre installed)

If you plan to connect the Pi to an external monitor, then you may also need:

* HDMI cable
* HDMI-enabled display
* USB mouse
* USB keyboard

### Connect Raspberry Pi

1. Insert your micro SD card into your Pi
2. Plug in your USB microphone and your USB or 3.5 mm speaker
3. Connect the keyboard and mouse using the usb ports (be sure not to cover your
USB microphone if using one).
4. Connect your monitor using the HDMI port.
5. Connect the ethernet Cable (if not using [Wi-Fi](https://www.raspberrypi.org/documentation/configuration/wireless/desktop.md)
on your Pi).

{% include image.html file="rpi3_.jpg" alt="Example RPI3" %}
<br>
Once the Pi is connected, boot it up and follow the prompts until the Pi's home
 screen displays.

### Configure and test the audio

Before installing the sample code, you need to configure the audio to use your
microphone and speaker.

1. Find your USB microphone.
*  You will need to write down or copy the card number and device number.
```
$ arecord -1
```
2. Find your speaker (USB and 3.5 mm speakers have the same process).
* Write down or copy the card and device numbers.
```
$ aplay-1
```
3. From the home directory (`/home/pi`) create a file name `.asoundrc`.
4. Update the `.asoundrc` file with the correct slave definitions for microphone
and speaker.
* Use the configuration below but replace `<card number>` and `<device number>`
with the card and device numbers that were previously copied. Complete this for
both `pcm.mic` and `pcm.speaker`.
```
pcm.!default {
  type asym
  capture.pcm "mic"
  playback.pcm "speaker"
}
pcm.mic {
  type plug
  slave {
    pcm "hw:<card number>,<device number>"
  }
}
pcm.speaker {
  type plug
  slave {
    pcm "hw:<card number>,<device number>"
  }
}
```
5. Play a test sound. If you hear the sound, press <b>Ctrl+C</b>.
```
$ speaker-test -t wav
```
* If you do not hear a sound, try adjusting the volume. Press the up arrow key
to set the playback volume level to around 70.
```
$ alsamixer
```
6. Record an audio clip.
```
$ arecord --format=S16_LE --duration=5 --rate=16000 --file-type=raw out.raw
```
7. Playback the recording.
```
$ aplay --format=S16_LE --rate=16000 out.raw
```

If the audio recording and playback is working, then the initial configuration
is complete. If not, check your microphone and speaker connections and try
again.

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
