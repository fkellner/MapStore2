# Performing Measurements

The Measure tool in [MapStore](https://mapstore.geosolutionsgroup.com/mapstore/#/) allows the user to perform different kind of measurements (like distance, area and bearing etc.) on the map. It also provides some additional functionalities that are described in this section of the documentation. The tool is accessible from the [Side Toolbar](mapstore-toolbars.md#side-toolbar) by selecting the <img src="../img/button/measurament.jpg" class="ms-docbutton" style="max-height:20px;"/> button that opens the following toolbar:

<img src="../img/measure/measure.jpg" class="ms-docimage" style="max-width:600px;"/>

Through this window it is possible to:

* Measure distance <img src="../img/button/measure-distance.jpg" class="ms-docbutton"/>

* Measure Area <img src="../img/button/measure-area.jpg" class="ms-docbutton"/>

* Measure Bearing <img src="../img/button/measure-bearing.jpg" class="ms-docbutton"/>

* Clear measures <img src="../img/button/delete_button.jpg" class="ms-docbutton"/>

* Export the measures to *GeoJSON* <img src="../img/button/json_export_button.jpg" class="ms-docbutton"/>

* Add the measure as a layer in [TOC](toc.md#table-of-contents) <img src="../img/button/layers_button.jpg" class="ms-docbutton"/>

* Add the measure as an [Annotation](annotations.md#add-new-annotation) <img src="../img/button/add-as-annotation.jpg" class="ms-docbutton"/>

!!! note
    The user can perform more than one measurement simultaneously on the map and then cancel it with the **Clear Measures** button <img src="../img/button/delete_button.jpg" class="ms-docbutton"/>

## Measure distance

As soon as the measure window opens, by default the measure distance option is selected <img src="../img/button/measure-distance-green.jpg" class="ms-docbutton"/>. In order to perform a distance measure, each click on the map correspond to a segment of the line (at least one segment is needed) while the double click inserts the last line segment and ends the drawing session.

<video class="ms-docimage" style="max-width:600px;" controls><source src="../img/measure/measure-distance-ex.mp4"/></video>

The available units of measure are:

<img src="../img/measure/distance-uom.jpg" class="ms-docimage" style="max-width:300px;"/>

!!! note
    The length of a line segment is shown on the map together with the measurement of the overall distance of all segments.

## Measure area

Once the **Measure Area** button is selected <img src="../img/button/measure-area-green.jpg" class="ms-docbutton"/>, it is possible to start the drawing session (in this case at least 3 vertices need to be indicated). Same as measuring the distance, each click correspond to a vertex and the double click will indicate the last one.

<video class="ms-docimage" style="max-width:600px;" controls><source src="../img/measure/measure-area-ex.mp4"/></video>

In this case the available units of measure are:

<img src="../img/measure/area-uom.jpg" class="ms-docimage" style="max-width:300px;"/>

!!! note
    Each side's length of the polygon is reported in map along with its perimeter and the area.

## Measure bearing

The Bearing measurements allows you to measure directions and angles. In the quadrant bearing system, the bearing of a line is measured as an angle from the reference meridian, either the north or the south, toward the east or the west. Bearings in the quadrant bearing system are written as a meridian, an angle and a direction. For example, a bearing of N 30 W defines an angle of 30 degrees west measured from north. A bearing of S 15 E defines an angle of 15 degrees east measured from the south.<br>
After selecting the **Measure Bearing** button <img src="../img/button/measure-bearing-green.jpg" class="ms-docbutton"/> the user can draw a line with only two vertices that indicates respectively the starting and the ending point.

<video class="ms-docimage" style="max-width:600px;" controls><source src="../img/measure/measure-bearing-ex.mp4"/></video>

## Export the measure

Measurements drawn on the map can be exported in `GeoJson` format through the <img src="../img/button/json_export_button.jpg" class="ms-docbutton"/> button.

## Add the measure as layer

Once a measure is drawn, it is possible to add it as a layer through the <img src="../img/button/layers_button.jpg" class="ms-docbutton"/> button. The created layer is added to the [Table of Contents](toc.md#table-of-contents) as follows:

<img src="../img/measure/as_layer.jpg" class="ms-docimage"/>

## Add measure as annotation

Once a measure is drawn, it is possible to add it as an [Annotation](annotations.md#add-new-annotation) through the <img src="../img/button/add-as-annotation.jpg" class="ms-docbutton"/> button. The following panel opens:

<img src="../img/measure/add-as-annotation-ex.jpg" class="ms-docimage"/>

From this step the creation process is the same described in the [Annotations section](annotations.md#add-new-annotation).

## Measurement on the 3D navigation

When the [3D Navigation](navigation-toolbar.md#3d-navigation) is enabled, the user has the ability to perform distance, area, point coordinates, height from terrain, angle and slope measurements on the 3D map.

!!! note
    The MapStore 3D works on top of CesiumJS mapping library where the ellipsoidal coordinate system is used to represents mapping features. For this reason all measurements performed with the MapStore measurement tool should be interpreted as having a height calculated above the ellipsoid.

### Measure distance on the 3D navigation

As soon as the measure window opens, by default the **Measure distance in 3D space** option is selected <img src="../img/button/measure-distance-on-3d.jpg" class="ms-docbutton"/>. In order to perform a distance measure, each click on the map correspond to a segment of the line (at least one segment is needed) while the double click inserts the last line segment and ends the drawing session.

<video class="ms-docimage" style="max-width:600px;" controls><source src="../img/measure/measure-distance-3d-ex.mp4"/></video>

### Measure geodesic distance

Once the **Measure geodesic distance** button is selected <img src="../img/button/measure-distance-green.jpg" class="ms-docbutton"/>, it is possible to start the drawing session. Same as measuring the distance, each click corresponds to a vertex (at least two vertices are needed) and the double click will indicate the last one. With this measurement type it is possible also in 3D mode to have the geodesic distance calculated at the absolute zero of the WGS84 ellipsoid.  

<video class="ms-docimage" style="max-width:600px;" controls><source src="../img/measure/measure-geodesic-ex.mp4"/></video>

### Measure area on the 3D navigation

Once the **Measure Area in 3D space** button is selected <img src="../img/button/measure-area-on-3d.jpg" class="ms-docbutton"/>, it is possible to start the drawing session (in this case, at least 3 vertices need to be indicated). Same as measuring the distance, each click corresponds to a vertex and the double click will indicate the last one.

<video class="ms-docimage" style="max-width:600px;" controls><source src="../img/measure/measure-area-3d-ex.mp4"/></video>

### Measure point coordinates

After selecting the **Measure point coordinates** button <img src="../img/button/measure-point-coordinate-on-3d.jpg" class="ms-docbutton"/> the editor can click on a point on the map and know latitude, longitude and altitude of that point.

<video class="ms-docimage" style="max-width:600px;" controls><source src="../img/measure/measure-point-3d-ex.mp4"/></video>

### Measure height from terrain

Once the **Measure height from terrain** button is selected <img src="../img/button/measure-height-from-terrain-on-3d.jpg" class="ms-docbutton"/>, it is possible to click on a point on the map and know the distance from the point to the terrain.

<video class="ms-docimage" style="max-width:600px;" controls><source src="../img/measure/measure-height-from-terrain-3d-ex.mp4"/></video>

### Measure angle

Once the **Measure angle in 3D space** button is selected <img src="../img/button/measure-angle-on-3d.jpg" class="ms-docbutton"/>, the editor can draw three points on the map and get the angle value.

<video class="ms-docimage" style="max-width:600px;" controls><source src="../img/measure/measure-angle-3d-ex.mp4"/></video>

### Measure slope

Once the **Measure slope** button is selected <img src="../img/button/measure-slope-on-3d.jpg" class="ms-docbutton"/>, the editor can draw three points on the map to create a triangular surface and get the slope value.

<video class="ms-docimage" style="max-width:600px;" controls><source src="../img/measure/measure-slope-3d-ex.mp4"/></video>
