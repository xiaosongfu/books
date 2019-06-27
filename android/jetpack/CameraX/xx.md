        int numberOfCameras = Camera.getNumberOfCameras();
        Logger.d(" Camera.getNumberOfCameras = %d", numberOfCameras);
        for (int i = 0; i < numberOfCameras; i++) {
            Camera.CameraInfo cameraInfo = new Camera.CameraInfo();
            Camera.getCameraInfo(i, cameraInfo);
            Logger.d("cameraInfo.facing = %d", cameraInfo.facing);
        }