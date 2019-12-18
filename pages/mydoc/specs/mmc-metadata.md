---
title: HBO Media Manifest Core Metadata
summary: "The purpose of this specification is to define the metadata required for content delivery into WarnerMedia's Media Supply Chain."
sidebar: mydoc_sidebar
permalink: mydoc_mmc_metadata.html
folder: mydoc
---

## Objective

The purpose of this document is to document and define WarnerMedia’s requirements for the successful delivery of content and technical metadata using MovieLabs Media Manifest Core (MMC).

## References

See the Appendix for a list of the external specifications referenced, but not included in this document. MMC sample files are available upon request.

## Contact Information

* Content Acquisitions delivery questions: [WMContentAcquisitions@warnermediagroup.com](WMContentAcquisitions@warnermediagroup.com)
* Specification questions: [WMTechSpecs@warnermediagroup.com](WMTechSpecs@warnermediagroup.com)

## Media Manifest Core

WarnerMedia has standardized on MMC, which is an industry-standard from the MovieLabs family of specifications, to accompany all packages or assets delivered to the WarnerMedia Media Supply Chain (MSC). The Media Manifest Core has a simple metadata structure able to express relationships between media elements and technical metadata that is discrete from the physical form and location of the assets. WarnerMedia is currently utilizing Media Manifest version 1.8 (https://movielabs.com/md/manifest/v1.8/Manifest_v1.8.pdf).

WarnerMedia’s manifest requirement is a well-defined subset of the overall content in MMC. Specifically, we support the following key features:

* **Inventory -** The inventory of media, including video, audio, text tracks, and artwork.
  * Video - Description of the parent video track.
  * Audio - Description of one or more audio tracks.
  * Subtitle - Metadata about subtitle tracks.
  * Image - Description of the images.
* **Presentations**
  * Markers - Representation of timed events in the video track.
* **Picture Groups -** Metadata about artwork referenced in inventory.

In addition to metadata requirements, WarnerMedia relies on consistent taxonomy and controlled vocabulary for various fields. For accepted values, refer to the [Controlled Vocabulary]() section.

## Identifiers

As prescribed by the MMC specification, the primary requirement for identifiers is global uniqueness. In order to comply with the MMC specification, providers MUST supply identifiers in the following format:

**md:[idtype]:[scheme]:[SSID]:[additional information]**

## Parameter Definitions

`<idtype>` - the type of identifier. See Common Metadata for more details on identifier types.

`<scheme>` - the namespace of the identifier. We accept registered identifiers with EIDR, TMS, Gracenote or any Common Metadata recognized naming scheme. We also accept the private house scheme used in the distributor org.

`<SSID>` - The scheme specific ID or SSID is a string that corresponds with IDs in scheme. For example: 58D1-A4D9-E968-F592-5435-M for EIDR scheme

## Example

**md: id:EIDR-S:58D1-A4D9-E968-F592-5435-M**

The parent ContentID MUST be the identification of the edit-level entity in the distributor org. It MUST be specified within the Inventory Metadata-type, which can contain: Content ID, metadata, or reference a metadata container.

## Inventory Metadata

This purpose of this section is to contain either Basic Metadata, or a container reference to Basic Metadata. Contributors to WarnerMedia MUST use this section of the MMC to provide the Content ID, Work Type and distribution organization.

The ContentID must match the previously established Title Record ID in the above format, in order to match the content to the Descriptive Metadata.  See Automated Content Delivery spec.

### Snippet

```
<Metadata ContentID="md:cid:eidr-s:10.5240/C124-0623-A677-69A8-0B8C-J:mec">
   <BasicMetadata>
      <WorkType>Movie</WorkType>
      <WorkTypeDetail>Original</WorkTypeDetail>
      <AssociatedOrg idType="EIDRPartyID" organizationID="10.5237/A929-C667" role="distributor">
         <DisplayName>Warner Bros.</DisplayName>
         <SortName>Warner Bros.</SortName>
      </AssociatedOrg>
   </BasicMetadata>
</Metadata>
```

## Audio

This section describes the two tracks for audio. The first example is for 5.1 Surround English and the second is for Dual Mono Spanish.

### 5.1 Surround English Snippet

```
<Audio AudioTrackID="md:audtrackid:eidr-x:10.5240/961B-5417-8551-0544-8586-V:composite-5.1.en">
   <Type>primary</Type>
   <Description>5.1 Surround</Description>
   <Language>en</Language>
   <Channels>6</Channels>
   <Encoding>
      <Codec>PCM</Codec>
      <TrackReference>1</TrackReference>
      <ChannelMapping>L,R,C,LFE,LS,RS</ChannelMapping>
   </Encoding>
</Audio>
```

### Dual Mono Spanish Snippet

```
<Audio AudioTrackID="md:audtrackid:eidr-x:10.5240/961B-5417-8551-0544-8586-V:composite-2.0DM.en">
   <Type>Primary</Type>
   <Description>Dual Mono</Description>
   <Language>es</Language>
   <Channels>2</Channels>
   <Encoding>
      <Codec>PCM</Codec>
      <TrackReference>2</TrackReference>
      <ChannelMapping>M1,M2</ChannelMapping>
   </Encoding>
</Audio>
```

## Inventory

This purpose of this section in the MMC is to provide technical details regarding the delivered assets. Several fields are required for the DTC workflow, while some are optional and are indicated accordingly.

### Snippet

```
<Image ImageID="md:imageid:eidr-s:C124-0623-A677-69A8-0B8C-J:Logo-png">
   <Width>4320</Width>
   <Height>1300</Height>
   <Encoding>png</Encoding>
   <ContainerReference>
      <ContainerLocation>/A2017084/AustinPowersIMOM_1997_2017084_Logo_4320x1300.png</ContainerLocation>
   </ContainerReference>
</Image>
```

<table>
   <tr>
      <th colspan="4">MMC Field Name</th>
      <th>Required?</th>
      <th>Description</th>
   </tr>
   <tr>
      <td colspan="6"><b>Video</b></td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">VideoTrackID</td>
      <td>Yes</td>
      <td>The identifier of the video track. md:videotrackid:[scheme]:[SSID]</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Type</td>
      <td>Yes</td>
      <td>The video type. Only primary video is accepted</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">SubType</td>
      <td>Yes</td>
      <td>This field may be used to further describe the primary video. (Theatrical, Broadcast, DTC, Censored)</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Encoding</td>
      <td>Yes</td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">Codec</td>
      <td>Yes</td>
      <td>The codec used such as JPEG2000. See accepted video codecs in <a href="https://google.com">Controlled Vocabulary</a></td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">BitRateAverage</td>
      <td></td>
      <td>Bitrate averaged over the entire track</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">ActualLength</td>
      <td>Yes</td>
      <td>The actual length of the track. Example PT1H40M27.130S</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Picture</td>
      <td>Yes</td>
      <td>Update</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">AspectRatio</td>
      <td>Yes</td>
      <td>The original aspect ratio calculated by dividing active width pixels / active height pixels</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">FrameRate</td>
      <td>Yes</td>
      <td>The native frame rate, frames/seconds denoted as decimal</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">ActiveWidthPixels</td>
      <td>Yes</td>
      <td>Number of active width pixels</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">ActiveHeightPixels</td>
      <td>Yes</td>
      <td>Number of active height pixels</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">WidthPixels</td>
      <td>Yes</td>
      <td>Number of pixel columns</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">HeightPixels</td>
      <td>Yes</td>
      <td>Number of pixel rows</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">Progressive</td>
      <td>Yes</td>
      <td>Boolean indicating picture scan type. “true”=progressive, “false”=interlaced</td>
   </tr>
   <tr>
      <td colspan="6"><b>Subtitle</b></td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">SubtitleTrackId</td>
      <td>Yes</td>
      <td>The identifier of the subtitle track. The format - md:subtrackid:[scheme]:[SSID]</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Type</td>
      <td>Yes</td>
      <td>The purpose of the Subtitle, see accepted subtitle types in <a href="https://google.com">Controlled Vocabulary</a></td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">FormatType</td>
      <td>Yes</td>
      <td>The subtitle FormatType</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Language</td>
      <td>Yes</td>
      <td>Language of the subtitle track</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">ContainerReference</td>
      <td>Yes</td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">ContainerLocation</td>
      <td>Yes</td>
      <td>Contains a URL referencing the location of the file</td>
   </tr>
   <tr>
      <td colspan="6"><b>Audio</b></td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">AudioTrackId</td>
      <td>Yes</td>
      <td>The attribute of the audio track. The format 
         md:audtrackid:[scheme]:[SSID]:[info]
      </td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Type</td>
      <td>Yes</td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">SubType</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Language</td>
      <td>Yes</td>
      <td>Indicates how channels are mapped to intended speaker locations</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Encoding</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">Codec</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">Channels</td>
      <td>Yes</td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">TrackReference</td>
      <td>Yes</td>
      <td>An integer indicating the target track’s number/position</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">ChannelMapping</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">ContainerReference</td>
      <td>Yes</td>
      <td></td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">ContainerLocation</td>
      <td>Yes</td>
      <td>Contains a URL referencing the location of the file</td>
   </tr>
   <tr>
      <td colspan="6"><b>Image</b></td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">ImageID</td>
      <td>Yes</td>
      <td>The identifier of the image. md:imageid:[schema]:[SSID]:[info]</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Width</td>
      <td>Yes</td>
      <td>The image width</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Height</td>
      <td>Yes</td>
      <td>The image height</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Purpose</td>
      <td>Yes</td>
      <td>The image purpose, see accepted types in <a href="https://google.com">Controlled Vocabulary</a></td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Encoding</td>
      <td>Yes</td>
      <td>The encoding method or format</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">ContainerReference</td>
      <td>Yes</td>
      <td>Update</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">ContainerLocation</td>
      <td>Yes</td>
      <td>Contains a URL referencing the location of the file</td>
   </tr>
</table>

## Picture Groups

Each feature, episode, and series delivered to the platform MUST be accompanied with images. A picture group is the selection of images referenced in the inventory section associated with a feature, episode, or series.

The association is established by using the Content ID as the picture group identifier.

For example, if the series identifier
is:

**md:cid:EIDR-S:58D1-A4D9-E968-F592-5435-M**

the picture group identifier MUST be:

**md:picturegroupid:EIDR-S:58D1-A4D9-E968-F592-5435-M**

A Picture within a group MUST define its purpose. The purpose conveys the use case of the image (e.g. Background, Tile, UniversalSearch) defined within the [WarnerMedia Contribution Specification]().

### Snippet

```
<PictureGroups>
   <PictureGroup PictureGroupID="md:picturegroupid:eidr-s:C124-0623-A677-69A8-0B8C">
      <Picture>
         <PictureID>md:imageid:eidr-s:C124-0623-A677-69A8-0B8C:Logo-png.en</PictureID>
         <Purpose>Logo</Purpose>
      </Picture>
   </PictureGroup>
</PictureGroups>
```

<table>
   <tr>
      <th colspan="4">MMC Field Name</th>
      <th>Required?</th>
      <th>Description</th>
   </tr>
   <!---
      Begin PictureGroups Section
      -->
   <tr>
      <td colspan="6"><b>PictureGroups</b></td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">PictureGroup</td>
      <td>Yes</td>
      <td>Selection of images associated with a title or series</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">PictureGroupID</td>
      <td>Yes</td>
      <td>
         The picture group ID which refers to the parent (movie, episode or series) Content ID. md:picturegroupid:[scheme]:[SSID]
      </td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td colspan="2">Picture</td>
      <td>Yes</td>
      <td>The artwork for the title. Can be 1..n </td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td></td>
      <td colspan="1">PictureID</td>
      <td>Yes</td>
      <td>The ID of the image referenced in the Inventory section md:imageid:[scheme]:[SSID]</td>
   </tr>
   <tr>
      <td></td>
      <td></td>
      <td></td>
      <td colspan="1">Purpose</td>
      <td>Yes</td>
      <td>The purpose or use case of the artwork. The controlled vocabulary is defined by WarnerMedia platform</td>
   </tr>
</table>

## Markers

A marker identifies a significant time-code event within a work. A single, “marked” frame may represent one point in time (a single frame’s timecode label) or may be one of a pair of markers describing the start and end of a segment of interest.

* Distinct segments described by first-frame (FF) and last-frame (LF) notation may overlap.

* Composition segments (declared using the in-point label FFOC and the out-point label LFOC) MUST bracket a single, contiguous segment of program content. If one were to play all composition segments back-to-back, playback MUST not include non-program material nor exclude any program content.

* Logos, slates, cards and so forth are not program content and SHOULD NOT appear in a playlist of composition segments. However, they MUST be “marked.”

* End-credits and start-credits are not distinct composition segments and MUST be marked independently of the composition segment in which they appear.

Warner Media supports the label types described in [SMPTE ST 2067-3]() and will not recognize or process a distributor’s proprietary marker labels. Supported labels are also listed in the controlled vocabulary section below.

In addition to the SMPTE labels, we support two additional, non-SMPTE labels (a pair) which allow us to distinguish black outside of the bounds of the
program from commercial black. The two labels are:

1.	FFVB – First frame of video black
2.	LFVB – Last frame of video black

### Snippet

```
<Marker>
   <Timecode dropframe="false">00:59:20:00</Timecode>
   <DisplayLabel language="en">START: SLATE</DisplayLabel>
   <Label>FFHS</Label>
</Marker>
```

<table>
   <tr>
      <th colspan="4">MMC Field Name</th>
      <th>Required?</th>
      <th>Description</th>
   </tr>
   <tr>
      <td colspan="6"><b>Markers</b></td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Marker</td>
      <td>Yes</td>
      <td>Represents a timed event</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Timecode</td>
      <td>Yes</td>
      <td>Timecode of marker</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">DisplayLabel</td>
      <td>No</td>
      <td>Optional display text for the marker</td>
   </tr>
   <tr>
      <td></td>
      <td colspan="3">Label</td>
      <td>Yes</td>
      <td>Label describing the purpose of the marker. Examples are LFTC (Last Frame of Title Credits), FFEC (First Frame of End Credits). The namespace for the labels is IMFCPL - SMPTE2067-3</td>
   </tr>
</table>

## Controlled Vocabulary

This section contains the controlled values supported by WarnerMedia.

<table>
   <tr>
      <th>Type</th>
      <th>Accepted Values</th>
      <th>Notes and References</th>
   </tr>
   <tr>
      <td>Work Type</td>
      <td>
         <ul>
            <li>Movie</li>
            <li>Short</li>
            <li>Series</li>
            <li>Season</li>
            <li>Episode</li>
            <li>Non-episodic Show</li>
            <li>Promotion</li>
         </ul>
      </td>
      <td>Work in <a href="https://movielabs.com/md/md/v2.7/Common_Metadata_v2.7.pdf">Common Metadata 2.7</a>
      </td>
   </tr>
   <tr>
      <td>Work Type Detail</td>
      <td>
         <ul>
            <li>Feature</li>
            <li>Home</li>
            <li>Theatrical</li>
            <li>Alternate Version</li>
            <li>Director Cut</li>
            <li>Unrated Version</li>
            <li>Extended Cut</li>
            <li>Hospitality</li>
            <li>TV Edit</li>
            <li>Sing-a-long</li>
            <li>Workprint</li>
            <li>Never Aired Episode</li>
            <li>Never Aired Pilot</li>
            <li>Trailer</li>
            <li>Default Trailer</li>
            <li>Teaser</li>
            <li>Preview</li>
            <li>Short Preview</li>
            <li>Long Preview</li>
            <li>Sizzle Reel</li>
            <li>EPK</li>
            <li>Clip</li>
            <li>Excluded Scenes</li>
            <li>Featurette</li>
            <li>Supplemental</li>
            <li>Credits</li>
         </ul>
      </td>
      </td>
      </td>
   </tr>
   <tr>
      <td>Video Type</td>
      <td>
         <ul>
            <li>Primary</li>
         </ul>
      </td>
      <td>Video Type Encoding in <a href="https://movielabs.com/md/md/v2.7/Common_Metadata_v2.7.pdf">Common Metadata 2.7</a>
      </td>
   </tr>
   <tr>
      <td>Video Codec</td>
      <td>
         <ul>
            <li>JPEG2000</li>
            <li>PRORESHQ</li>
         </ul>
      </td>
      <td>Video CODEC Encoding in <a href="https://movielabs.com/md/md/v2.7/Common_Metadata_v2.7.pdf">Common Metadata 2.7</a>
      </td>
   </tr>
   <tr>
      <td>Color Type</td>
      <td>
         <ul>
            <li>color</li>
            <li>bandw</li>
            <li>colorized</li>
            <li>composite</li>
            <li>unknown</li>
         </ul>
      </td>
      <td>Color Type Encoding in <a href="https://movielabs.com/md/md/v2.7/Common_Metadata_v2.7.pdf">Common Metadata 2.7</a>
      </td>
   </tr>
   <tr>
      <td>Aspect Ratio</td>
      <td>Decimal such that when active width pixels is divided by active height pixels and rounded, the result is between 1.0 and 5.0, like those in the Notes column.
      </td>
      <td>
         Examples:
         <ul>
            <li>1.33</li>
            <li>1.37</li>
            <li>1.43</li>
            <li>1.66</li>
            <li>1.75</li>
            <li>1.78</li>
            <li>1.85</li>
            <li>2</li>
            <li>2.2</li>
            <li>2.35</li>
            <li>2.4</li>
            <li>2.55</li>
            <li>2.75</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Frame Rate</td>
      <td>
         <ul>
            <li>23.98</li>
            <li>25</li>
            <li>29.97</li>
         </ul>
      </td>
      <td></td>
   </tr>
   <tr>
      <td>Audio type</td>
      <td>
         <ul>
            <li>Primary</li>
            <li>DVS</li>
            <li>Commentary</li>
            <li>Silent</li>
            <li>Other</li>
            <li>Director</li>
            <li>Actor</li>
            <li>ActorDirector</li>
         </ul>
      </td>
      <td></td>
   </tr>
   <tr>
      <td>Audio SubType for Other</td>
      <td>
         <ul>
            <li>MandE</li>
            <li>Music</li>
            <li>Effects</li>
            <li>Dialog-only</li>
         </ul>
      </td>
      <td></td>
   </tr>
   <tr>
      <td>Audio Language</td>
      <td>Language tag in accordance with BCP 47, with the tag syntax as [language]-[region]
      </td>
      <td>
         <a href="https://tools.ietf.org/html/bcp47">BCP 47 Tags for Identifying Languages</a>
         <br />
         <br />
         Examples:
         <ul>
            <li>en-US</li>
            <li>es-419</li>
            <li>id-ID</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Audio Encoding Codec</td>
      <td>
         <ul>
            <li>PCM</li>
         </ul>
      </td>
      <td></td>
   </tr>
   <tr>
      <td>Audio Encoding Channels</td>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <td>Audio Encoding TrackReference</td>
      <td>An integer representing the location of the audio track being described</td>
      <td>An integer indicating the target track’s position within the media container. The first audio track would have a TrackReference 1. The second audio track would have TrackReference 2.</td>
   </tr>
   <tr>
      <td>Audio Encoding ChannelMapping</td>
      <td>
         <ul>
            <li>5.1 Surround (L, R, C, LFE, LS, RS)</li>
            <li>Stereo (L, R)</li>
            <li>Matrix Encoded Stereo (Lt, Rt)</li>
            <li>Dual Mono (M1, M2)</li>
         </ul>
      </td>
      <td>
         The available audio channels as a comma-separated, ordered string. The order expected is L,R,C,LFE,LS,RS
         <ul>
            <li>L - LEFT</li>
            <li>R - RIGHT</li>
            <li>C - CENTER</li>
            <li>LS - LEFT_SURROUND</li>
            <li>RS - RIGHT_SURROUND</li>
            <li>LT - LEFT_TOTAL</li>
            <li>RT - RIGHT_TOTAL</li>
            <li>LFE - LOW_FREQUENCE_EFFECTS</li>
            <li>M1 - DM CHANNEL 1</li>
            <li>M2 - DM CHANNEL 2</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Marker Label</td>
      <td>
         <ul>
            <li>FFBT (First Frame Bars & Tone)</li>
            <li>LFBT (Last Frame Bars & Tone)</li>
            <li>FFHS (First Frame Head Slate)</li>
            <li>LFHS (Last Frame Head Slate)</li>
            <li>FFSP(First Frame Sync Pop</li>
            <li>LFSP (Last Frame Sync Pop) </li>
            <li>FFCL (First Frame Company/Production Logo)</li>
            <li>LFCL (Last Frame Company/Production Logo)</li>
            <li>FFOB (First Frame Ratings Band)</li>
            <li>LFOB (Last Frame Ratings Band)</li>
            <li>FFRA (First Frame Recap Audio)</li>
            <li>LFRA (Last Frame Recap Audio)</li>
            <li>FFTC (First Frame Title/Start Credits)</li>
            <li>LFTC (Last Frame Title/Start Credits)</li>
            <li>FFOC (First Frame Composition)</li>
            <li>LFOC (Last Frame Composition)</li>
            <li>FFEC (First Frame End-Credits)</li>
            <li>LFEC (Last Frame End-Credits)</li>
            <li>FFCB (First Frame Commercial Black)</li>
            <li>LFCB (Last Frame Commercial Black)</li>
            <li>FFVB (First Frame Video Black)</li>
            <li>LFVB (Last Frame Video Black)</li>
         </ul>
      </td>
      <td><a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7291923">IMFCPL – SMPTE 2067-3 Marker Label</a>
      </td>
   </tr>
   <tr>
      <td>Subtitle Type</td>
      <td>
         <ul>
            <li>normal</li>
            <li>forced</li>
            <li>SDH</li>
         </ul>
      </td>
      <td>Subtitle Type Encoding in <a href="https://movielabs.com/md/md/v2.7/Common_Metadata_v2.7.pdf">Common Metadata 2.7</a>
         <br />
         <br />
         Caption files MUST be mapped to SDH.
      </td>
   </tr>
   <tr>
      <td>Subtitle/Captions Format Type</td>
      <td>
         <ul>
            <li>SCC</li>
            <li>SMPTE 2052-1 Timed Text</li>
         </ul>
      </td>
      <td>Format Type Encoding in <a href="https://movielabs.com/md/md/v2.7/Common_Metadata_v2.7.pdf">Common Metadata 2.7</a>
      </td>
   </tr>
   <tr>
      <td>Subtitle Language</td>
      <td>Language tag in accordance with BCP 47, with the tag syntax as [language]-[region]</td>
      <td>
         <a href="https://tools.ietf.org/html/bcp47">BCP 47 Tags for Identifying Languages</a>
         <br />
         <br />
         Examples:
         <ul>
            <li>en-US</li>
            <li>es-419</li>
            <li>id-ID</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td>Picture Purpose</td>
      <td>
         <ul>
            <li>Tile</li>
            <li>TileBurnedIn</li>
            <li>Logo</li>
            <li>Background</li>
            <li>UniversalSearch</li>
         </ul>
      </td>
      <td>Defined by WarnerMedia Image Technical Specifications.</td>
   </tr>
</table>
