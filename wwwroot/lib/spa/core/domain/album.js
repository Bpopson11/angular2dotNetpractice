"use strict";
class Album {
    constructor(id, title, description, thumbnail, dateCreated, totalPhotos) {
        this.Id = id;
        this.Title = title;
        this.Description = description;
        this.Thumbnail = thumbnail;
        this.DateCreated = dateCreated;
        this.TotalPhotos = totalPhotos;
    }
}
exports.Album = Album;
