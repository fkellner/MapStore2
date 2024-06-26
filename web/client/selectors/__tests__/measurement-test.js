/*
* Copyright 2017, GeoSolutions Sas.
* All rights reserved.
*
* This source code is licensed under the BSD-style license found in the
* LICENSE file in the root directory of this source tree.
*/


import expect from 'expect';

import {
    isCoordinateEditorEnabledSelector,
    showAddAsAnnotationSelector,
    measurementSelector,
    getValidFeatureSelector,
    isActiveSelector,
    coordsAeronauticalEnabledSelector
} from '../measurement';

import {
    polyFeatureNotClosedInvalid,
    polyFeatureNotClosed,
    lineFeature3,
    lineFeatureWithoutGeom
} from '../../test-resources/drawsupport/features';

describe('Test maptype', () => {
    it('test isCoordinateEditorEnabledSelector', () => {
        const retval = isCoordinateEditorEnabledSelector({
            controls: {
                measure: {
                    showCoordinateEditor: true
                }
            },
            measurement: {
                isDrawing: false
            },
            maptype: {
                mapType: "openlayers"
            }
        });
        expect(retval).toBe(true);
    });


    it('test showAddAsAnnotationSelector', () => {
        const retval = showAddAsAnnotationSelector({measurement: {showAddAsAnnotation: true}});
        expect(retval).toExist();
        expect(retval).toBe(true);
    });
    it('test getValidFeatureSelector no feature geom', () => {
        expect(getValidFeatureSelector({
            measurement: {
                feature: lineFeatureWithoutGeom
            }
        })).toEqual(lineFeatureWithoutGeom);
    });
    it('test measurementSelector', () => {
        let retval = measurementSelector({
            measurement: {
                showAddAsAnnotation: true,
                feature: polyFeatureNotClosedInvalid
            }
        });
        expect(retval).toExist();
        expect(retval.feature.geometry.coordinates).toEqual( [ [ [ 0, 1 ], [ 0, 5 ], [ 2, 1 ], [ 0, 1 ] ] ] );

        retval = measurementSelector({
            measurement: {
                showAddAsAnnotation: true,
                feature: polyFeatureNotClosed
            }
        });
        expect(retval.feature.geometry.coordinates).toEqual( [[[3, 1], [0, 5], [3, 3], [3, 1]]] );

        retval = measurementSelector({
            measurement: {
                showAddAsAnnotation: true,
                feature: lineFeature3
            }
        });
        expect(retval.feature.geometry.coordinates).toEqual( lineFeature3.geometry.coordinates );
    });
    it('test isActiveSelector ', () => {
        const toolState = isActiveSelector({
            controls: {
                measure: {
                    enabled: true
                }
            }
        });
        expect(toolState).toBe(true);
    });
    it('test coordsAeronauticalEnabledSelector ', () => {
        let flag = coordsAeronauticalEnabledSelector({
            search: {
                format: "aeronautical",
                activeSearchTool: "coordinatesSearch"
            }
        });
        expect(flag).toBe(true);
        flag = coordsAeronauticalEnabledSelector({
            search: {
                format: "decimal",
                activeSearchTool: "coordinatesSearch"
            }
        });
        expect(flag).toBe(false);
        flag = coordsAeronauticalEnabledSelector({
            search: {
                format: "aeronautical",
                activeSearchTool: "address"
            }
        });
        expect(flag).toBe(false);
    });
});
