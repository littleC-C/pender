package com.vendor.thirdparty.tl;

import java.io.Serializable;

class ByteArray
  implements Serializable
{
  private byte[] bytes = null;

  ByteArray(byte[] bytes) {
    this.bytes = bytes;
  }

  byte[] getBytes() {
    return this.bytes;
  }
}