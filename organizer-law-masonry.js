function readMedia(mediaID) {
    var oMM = com.terminalfour.media.MediaManager.getManager();
    var oMedia = oMM.get(dbStatement, mediaID, language);
    var oMediaStream = oMedia.getMedia();
    var oScanner = new java.util.Scanner(oMediaStream).useDelimiter("\\A");
    var sMedia = "";
    while (oScanner.hasNext()) {
        sMedia += oScanner.next();
    }
  return sMedia;
}

try {
    // Import Organizer base from media library
    var base = readMedia(3011734);
    eval(String(base));

    var titleField = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="Title" output="selective-output" modifiers="striptags,htmlentities" format="$value" />');

    // declare content wrappers
    var header, midder, footer;

    // declare content wrappers
    header ='<div class="masonryOrganizerWrapper contentItem" id="id' + content.getID() + '" \
                data-position-default="Main" data-position-selected="Main"> \
                <div class="masonryOrganizer standardContent card-group"> \
                <div class="masonryOrganizerExtra"></div>';
    midder = '<span></span>';
    footer = '</div><div class="masonryOrganizer ToggleExtra boxlinks" style="display:none">Show More</div></div>';

    // Write content
    main(header, midder, footer);

    
}   catch (err) {
        document.write(err.message + err.stack);
}