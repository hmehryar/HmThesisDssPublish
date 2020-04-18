/// <reference path="jquery-2.1.1.js" />
/// <reference path="plugins/jquery-ui/jquery-ui.js" />
/// <reference path="jquery.validate.min.js" />
/// <reference path="bootstrap.js" />
$(function () {
    $("a[data-modal=factorItems]").on("click", function () {
        $("#factorItemsModalContent").load(this.href, function () {
            $("#factorItemsModal").modal({ keyboard: true }, "show");
            $("#factorProductItemChoice").submit(function () {
                if ($("#factorProductItemChoice").valid()) {
                    $.ajax({
                        url: this.action,
                        type: this.method,
                        data: $(this).serialize(),
                        success: function (result) {
                            if (result.success) {
                                $("#factorItemsModal").modal("hide");
                                location.reload();
                            }
                        },
                        error: function () {
                            $("#MessageToClient").text("وب سرور خطا دارد.");
                        }
                    });
                    return false;
                }
            });

            $("#CriteriumItem_Name").autocomplete({
                minLength: 1,
                source: function (request, response) {
                    var url = $(this.element).data("url");
                    $.getJSON(url, { term: request.term }, function (data) {
                        response(data);
                    });
                },
                appendTo: $(".modal-body"),
                select: function (event, ui) {
                    $("#CriteriumItemId").val(ui.item.CriteriumId);
                    $("#CriteriumItem_Name").val(ui.item.CriteriumName);
                    //$("#Product_UnitPrice").val(ui.item.ProductUnitPrice);
                    //recalculateFactorProductItem();
                    //$("#Quantity").select();
                },
                change: function (event, ui) {
                    if (!ui.item) {
                        $(event.target).val("");
                    }
                }
            });
        });
        return false;
    });
    $("#factorItemsModal").on("show.bs.modal", function () {
        //recalculateFactorProductItem();
    });
    $("#factorItemsModal").on("shown.bs.modal", function () {
        $("#Product_Code").focus();
    });
    $("#factorItemsModal").on("hide.bs.modal", function () {
        location.reload();
    });
    //$("#CriteriumItem_Name").autocomplete({
    //    minLength: 1,
    //    source: function (request, response) {
    //        var url = $(this.element).data("url");
    //        $.getJSON(url, { term: request.term }, function (data) {
    //            response(data);
    //        });
    //    },
    //    appendTo: $(".modal-body"),
    //    select: function (event, ui) {
    //        $("#CriteriumId").val(ui.item.CustomerId);
    //        $("#CriteriumItem_Name").val(ui.item.CustomerName);
    //    },
    //    change: function (event, ui) {
    //        if (!ui.item) {
    //            $(event.target).val("");
    //        }
    //    }
    //});
    $("a[data-modal=dependencyItems]").on("click", function () {
        $("#dependencyItemsModalContent").load(this.href, function () {
            $("#dependencyItemsModal").modal({ keyboard: true }, "show");
            $("#dependencyItemChoice").submit(function () {
                if ($("#dependencyItemChoice").valid()) {
                    $.ajax({
                        url: this.action,
                        type: this.method,
                        data: $(this).serialize(),
                        success: function (result) {
                            if (result.success) {
                                $("#dependencyItemsModal").modal("hide");
                                location.reload();
                            }
                        },
                        error: function () {
                            $("#MessageToClient").text("وب سرور خطا دارد.");
                        }
                    });
                    return false;
                }
            });
            $("#EndFactorGroup_Name").autocomplete({
                minLength: 1,
                source: function (request, response) {
                    var url = $(this.element).data("url");
                    $.getJSON(url, { term: request.term }, function (data) {
                        response(data);
                    });
                },
                appendTo: $(".modal-body"),
                select: function (event, ui) {
                    $("#EndFactorGroupId").val(ui.item.EndFactorGroupId);
                    $("#EndFactorGroup_Name").val(ui.item.EndFactorGroupName);
                    //$("#Product_UnitPrice").val(ui.item.ProductUnitPrice);
                    //recalculateFactorProductItem();
                    //$("#Quantity").select();
                },
                change: function (event, ui) {
                    if (!ui.item) {
                        $(event.target).val("");
                    }
                }
            });
        });
        return false;
    });
    //$("#EndFactorGroup_Name").autocomplete({
    //    minLength: 1,
    //    source: function (request, response) {
    //        var url = $(this.element).data("url");
    //        $.getJSON(url, { term: request.term }, function (data) {
    //            response(data);
    //        });
    //    },
    //    appendTo: $(".modal-body"),
    //    select: function (event, ui) {
    //        $("#EndFactorGroupId").val(ui.item.EndFactorGroupId);
    //        $("#EndFactorGroup_Name").val(ui.item.EndFactorGroupName);
    //        //$("#Product_UnitPrice").val(ui.item.ProductUnitPrice);
    //        //recalculateFactorProductItem();
    //        //$("#Quantity").select();
    //    },
    //    change: function (event, ui) {
    //        if (!ui.item) {
    //            $(event.target).val("");
    //        }
    //    }
    //});
    $("#dependencyItemsModal").on("show.bs.modal", function () {
        //recalculateDependencyItem();
    });
    $("#dependencyItemsModal").on("shown.bs.modal", function () {
        $("#Description").focus();
    });
    $("#dependencyItemsModal").on("hide.bs.modal", function () {
        location.reload();
    });

    $("a[data-modal=dependencyFactorItems]").on("click", function () {
        $("#dependencyFactorItemsModalContent").load(this.href, function () {
            $("#dependencyFactorItemsModal").modal({ keyboard: true }, "show");
            $("#dependencyFactorItemChoice").submit(function () {
                if ($("#dependencyFactorItemChoice").valid()) {
                    $.ajax({
                        url: this.action,
                        type: this.method,
                        data: $(this).serialize(),
                        success: function (result) {
                            if (result.success) {
                                $("#dependencyFactorItemsModal").modal("hide");
                                location.reload();
                            }
                        },
                        error: function () {
                            $("#MessageToClient").text("وب سرور خطا دارد.");
                        }
                    });
                    return false;
                }
            });
            $("#ComparisonFactor_Name").autocomplete({
                minLength: 1,
                source: function (request, response) {
                    var url = $(this.element).data("url");
                    $.getJSON(url, { term: request.term }, function (data) {
                        response(data);
                    });
                },
                appendTo: $(".modal-body"),
                select: function (event, ui) {
                    $("#ComparisonFactorId").val(ui.item.ComparisonFactorId);
                    $("#ComparisonFactor_Name").val(ui.item.ComparisonFactorName);
                },
                change: function (event, ui) {
                    if (!ui.item) {
                        $(event.target).val("");
                    }
                }
            });
        });
        return false;
    });
    $("#dependencyFactorItemsModal").on("show.bs.modal", function () {
        //recalculateDependencyItem();
    });
    $("#dependencyFactorItemsModal").on("shown.bs.modal", function () {
        $("#Description").focus();
    });
    $("#dependencyFactorItemsModal").on("hide.bs.modal", function () {
        location.reload();
    });

});

function recalculateFactorProductItem() {
    var quantity = parseInt(document.getElementById("Quantity").value).toFixed(0);
    var unitPrice = parseInt(document.getElementById("Product_UnitPrice").value).toFixed(2);
    if (isNaN(quantity)) {
        quantity = 0;
    }
    if (isNaN(unitPrice)) {
        unitPrice = 0;
    }
    document.getElementById("Quantity").value = quantity;
    document.getElementById("Product_UnitPrice").value = unitPrice;

    document.getElementById("TotalPrice").value = numberWithCommas((quantity * unitPrice).toFixed(2));
}
function numberWithCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


}
function recalculateDependencyItem() {
}