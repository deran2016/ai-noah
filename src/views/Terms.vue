<template>
  <v-card
    class="mx-auto"
    outlined
  >
    <v-card-text>
      <div class="body-1">
        연구 참여자 동의서
      </div>
      <div class="terms pa-2">
        ▶ 연구배경
        <br />
        연구배경
        <br />
        <br />
        ▶ 연구방법
        <br />
        연구방법
        <br />
        <br />
        ▶ 연구에 참여하면 얻게 되는 이득
        <br />
        이득
        <br />
        <br />
        ▶ 연구 참여에 따른 피해
        <br />
        피해
        <br />
        <br />
        ▶ 연구 준수사항
        <br />
        준수사항
        <br />
        <br />
        ▶연구기간 및 전체 연구 참여자 수
        <br />
        내용
        <br />
        <br />
        ▶연구에 참여해서 추가적으로 발생 되는 비용은 없습니다.
        <br />
        <br />
        ▶연구에 참여해서 직접적으로 지급되는 보상이나 혜택
        <br />
        본 연구에 참여하시면, 실험 사례비로 5,000원을 지급받게 됩니다.
        실험이 완료되면 모든 행정 처리를 거쳐 기입하신 계좌로 입금될 것입니다.
        단, 실험 시작 전에 참여를 거부하시면, 사례비는 지급되지 않습니다.
        하지만 이 밖에 실험 도중 다치거나 피해를 입는 상황, 불편감으로 인한 실험 중도 포기,
        혹은 실험 완료 이후에 실험 참여 거부와 같은 경우에는 이를 입증할 수 있는 증거 제시 시 실험비가 지급될 예정입니다.
        <br />
        <br />
        ▶자발적 참여 및 참여 거부와 철회의 사유
        <br />
        본 연구에 대한 참여 여부는 전적으로 귀하의 의사에 따라 결정하시면 됩니다. 만일 본 연구에
        참여하기를 원하지 않으시면 동의하지 않으셔도 되며, 동의 후에도 언제든 연구자에게 중지를 요청할 수 있습니다.
        중도 포기를 포함한 어떠한 경우에도 귀하에게 불이익은 없을 것입니다.
        중도 철회 시 실험 참여 중 수집한 귀하의 모든 정보는 즉시 파기됩니다.
        <br />
        <br />
        ▶ 개인 정보의 비밀 보장
        <br />
        본 연구의 결과 보고서나 출판물에서,
        귀하의 개인정보는 비밀로 유지될 것이며 법에 따라 보호될 것입니다.
        <br />
        <br />
        ▶ 연구대상자로서의 권익에 관한 정보 제공
        <br />
        본 연구는 성균관대학교 기관윤리심의위원회(IRB)에 의해 검토되고 승인되었습니다.
        만약 귀하의 권익에 피해를 주는 정보가 발생하는 경우, 연구자들은 즉시 알려드릴 것입니다.
        본 연구에 대한 질문사항이나 궁금한 점은 첫 페이지 상단의 연구자 연락처를 통해 언제든 문의하실 수 있으며,
        연구참가자의 권리 침해에 대해 문의할 사항이 있으시면 “성균관대학교 공동
        기기원 행정실 연구윤리 담당자 (TEL 031-299-6711)”에 연락하실 수 있습니다.
      </div>
      <div class="body-1 d-flex justify-end mb-5">
        <v-checkbox
          v-model="agreedTerm1"
          label="동의합니다"
        />
      </div>

      <div class="body-1">
        개인정보에 대한 비밀보장
      </div>
      <div class="terms pa-2">
        비밀보장
      </div>
      <div class="body-1 d-flex justify-end mb-5">
        <v-checkbox
          v-model="agreedTerm2"
          label="동의합니다"
        />
      </div>

      <div>
        본 실험을 통해 얻어진 귀하의 자료는 향후의 다른 연구에서도 사용되어 더 가치 있는 연구의 결과로 사용 될 수
        있습니다. 귀하의 자료를 미래의 다른 연구에 사용하는 것에 대해 다음 중 하나에 선택해 주시기 바랍니다.
      </div>

      <v-radio-group v-model="selectedOption">
        <v-radio
          label="향후의 모든 다른 연구에 제 자료를 제공하여 연구하는 것에 동의합니다."
          value="향후의 모든 다른 연구에 제 자료를 제공하여 연구하는 것에 동의합니다."
        />
        <v-radio
          label="성균관대학교의 연구자에게만 동의합니다."
          value="성균관대학교의 연구자에게만 동의합니다."
        />
        <v-radio
          label="본 연구의 연구자에게만 동의합니다."
          value="본 연구의 연구자에게만 동의합니다."
        />
        <v-radio
          label="동의하지 않습니다."
          value="동의하지 않습니다."
        />
      </v-radio-group>

      <v-text-field
        v-model="participantID"
        label="참여자 성명/휴대전화 번호 마지막 4자리 (ex: 홍길동/1234)"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        color="primary"
        :disabled="!agreedAll"
        @click="submit"
      >
        다음
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    agreedTerm1: false,
    agreedTerm2: false,
    selectedOption: null,
    participantID: '',
    round: 0,
  }),

  computed: {
    agreedAll() {
      return this.agreedTerm1
        && this.agreedTerm2
        && (this.selectedOption && this.selectedOption !== '동의하지 않습니다.')
        && (this.participantID && this.participantID.length >= 6 && this.participantID.indexOf('/') !== -1);
    },
  },

  mounted() {
  },

  methods: {
    ...mapMutations([
      'updateFields',
    ]),

    submit() {
      this.updateFields(this.$data);
      this.$router.push({ name: 'Explanation' });
    },
  },
};
</script>

<style lang="scss">
.terms {
  height: 150px;
  overflow-y: auto;
  border: 1px solid grey;
}
</style>
