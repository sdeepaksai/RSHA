import { Injectable } from '@nestjs/common';

@Injectable()
export class RfidService {
  private activeTags: Map<string, any> = new Map();

  async scanTag(tagId: string) {
    // RFID tag scanning logic
    return {
      tagId,
      scannedAt: new Date(),
      status: 'scanned',
    };
  }

  async recordEvent(eventData: any) {
    // Record RFID event
    this.activeTags.set(eventData.tagId, {
      ...eventData,
      recordedAt: new Date(),
    });
    return { success: true, message: 'Event recorded' };
  }

  async getActiveTags() {
    return Array.from(this.activeTags.values());
  }
}
